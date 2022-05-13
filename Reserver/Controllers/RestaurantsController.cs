using Microsoft.AspNetCore.Mvc;
using Reserver.Exceptions;
using Reserver.Models;
using Reserver.Services;
using Reserver.Util;

namespace Reserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
        private readonly RestaurantServices _service;

        public RestaurantsController(RestaurantServices service)
        {
            _service = service;
        }

        [HttpGet("MakeReservation")]
        public async Task<ActionResult<Reservation>> MakeReservation(string restaurantId, string userId, string date, int amount)
        {
            try
            {
                return Ok(await _service.MakeReservation(restaurantId, userId, date, amount));
            }
            catch (ArgumentNullException)
            {
                return BadRequest();
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        [HttpGet("TimeSlots")]
        public async Task<ActionResult<IEnumerable<TimeSlotDto>>> GetTimeSlots(string restaurantId, string date)
        {
            try
            {
                return Ok(await _service.GetAvailableTimeSlots(restaurantId, date));
            }
            catch (ArgumentNullException)
            {
                return BadRequest();
            }
            catch (ResourceNotFoundException)
            {
                return NotFound();
            }
            catch (DateHasPassedException)
            {
                return BadRequest(new { message = ErrorMsgHelper.DateHasPassedError });
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("ClaimRestaurant")]
        public async Task<ActionResult<Restaurant>> ClaimRestaurantOwnership(string userId, string restaurantId)
        {
            try
            {
                return await _service.ClaimRestaurantOwnership(userId, restaurantId);
            }
            catch (ArgumentNullException)
            {
                return BadRequest();
            }
            catch (ResourceNotFoundException)
            {
                return NotFound();
            }
            catch (RestaurantAlreadyOwnedException)
            {
                return BadRequest(new {message = ErrorMsgHelper.RestaurantAlreadyOwnedError});
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Restaurant>>> GetRestaurants()
        {
            return Ok(await _service.GetRestaurants());
        }

        [HttpGet("Reservations")]
        public async Task<ActionResult<IEnumerable<ReservationDto>>> GetAllReservationsByUser(string userId)
        {
            try
            {
                return Ok(await _service.GetAllReservationsByUser(userId));
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        [HttpGet("ByOwner")]
        public ActionResult<IEnumerable<Restaurant>> GetRestaurantsByOwner(string userId)
        {
            try
            {
                return Ok(_service.GetAllRestaurantsByOwner(userId));
            }
            catch (ArgumentNullException)
            {
                return BadRequest();
            }
        }
    }
}

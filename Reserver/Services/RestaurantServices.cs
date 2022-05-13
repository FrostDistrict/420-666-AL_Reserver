using Microsoft.EntityFrameworkCore;
using Reserver.DAL;
using Reserver.Exceptions;
using Reserver.Extensions;
using Reserver.Models;
using Reserver.Util;

namespace Reserver.Services;

public class RestaurantServices
{
    private readonly EntityContext _context;
    private readonly UserServices _userServices;

    public RestaurantServices(EntityContext context, UserServices userServices)
    {
        _context = context;
        _userServices = userServices;
    }

    public async Task<Reservation> MakeReservation(string restaurantId, string userId, string date, int amount)
    {
        restaurantId.ThrowIfNull(nameof(restaurantId));
        userId.ThrowIfNull(nameof(restaurantId));
        date.ThrowIfNull(nameof(date));

        var reservation = new Reservation
        {
            Date = date,
            Amount = amount,
            RestaurantId = restaurantId,
            ClientId = userId,
        };

        _context.Reservations.Add(reservation);
        await _context.SaveChangesAsync();

        return reservation;
    }

    public async Task<IEnumerable<TimeSlotDto>> GetAvailableTimeSlots(string restaurantId, string date)
    {
        restaurantId.ThrowIfNull(nameof(restaurantId));
        date.ThrowIfNull(nameof(date));

        var restaurant = await GetRestaurantById(restaurantId);
        if (restaurant == null)
        {
            throw new ResourceNotFoundException();
        }

        var targetDate = DateHelper.DateOnlyFromString(date);
        if (targetDate < DateOnly.FromDateTime(DateTime.Today))
        {
            throw new DateHasPassedException();
        }

        var schedule = DateHelper.GetScheduleFromString(restaurant.Schedule);
        var targetDateTimes =
            schedule.First(s => s.DayOfWeek.Equals(targetDate.DayOfWeek.ToString()));

        return BuildTimeSlotDto(targetDateTimes.Opening, targetDateTimes.Closing);
    }

    private IEnumerable<TimeSlotDto> BuildTimeSlotDto(TimeOnly opening, TimeOnly closing)
    {
        var time = opening;
        var lastReservationTime = new TimeOnly(closing.Hour - 2, 0);
        var timeSlots = new List<TimeSlotDto>();
        while (time < lastReservationTime)
        {
            timeSlots.Add(new TimeSlotDto
            {
                Time = time.ToString(),
                IsAvailable = true,
            });

            time = new TimeOnly(time.Hour + 2, 0);
        }

        return timeSlots;
    }

    public async Task<Restaurant> ClaimRestaurantOwnership(string userId, string restaurantId)
    {
        userId.ThrowIfNull(nameof(userId));
        restaurantId.ThrowIfNull(nameof(restaurantId));

        var user = await _userServices.GetUserById(userId);
        var restaurant = await GetRestaurantById(restaurantId);

        if (user == null || restaurant == null)
        {
            throw new ResourceNotFoundException();
        }

        if (restaurant.Owned)
        {
            throw new RestaurantAlreadyOwnedException();
        }

        restaurant.Owned = true;
        restaurant.UserId = userId;

        _context.Entry(restaurant).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return restaurant;
    }

    public async Task<Restaurant?> GetRestaurantById(string restaurantId)
    {
        restaurantId.ThrowIfNull(nameof(restaurantId));
        return await _context.Restaurants.FindAsync(restaurantId);
    }

    public async Task<IEnumerable<Restaurant>> GetRestaurants()
    {
        return await _context.Restaurants
            .ToListAsync();
    }

    public async Task<IEnumerable<ReservationDto>> GetAllReservationsByUser(string userId)
    {
        userId.ThrowIfNull(nameof(userId));

        var reservations = new List<ReservationDto>();

        foreach (var reservation in _context.Reservations)
        {
            if (reservation.ClientId == userId)
            {
                var restaurant = await GetRestaurantById(reservation.RestaurantId);
                reservations.Add(new ReservationDto
                {
                    Date = reservation.Date,
                    Amount = reservation.Amount,
                    Restaurant = restaurant,
                });
            }
        }

        return reservations;
    }

    public IEnumerable<Restaurant> GetAllRestaurantsByOwner(string userId)
    {
        userId.ThrowIfNull(nameof(userId));
        return _context.Restaurants
            .Where(restaurant => restaurant.UserId != null && restaurant.UserId.Equals(userId));
    }
}
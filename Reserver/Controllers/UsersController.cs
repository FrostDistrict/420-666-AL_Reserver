using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Reserver.DAL;
using Reserver.Exceptions;
using Reserver.Models;
using Reserver.Services;
using Reserver.Util;

namespace Reserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserServices _service;

        public UsersController(UserServices service)
        {
            _service = service;
        }

        [HttpPost("Login")]
        public async Task<ActionResult<User>> Login(Credentials credentials)
        {
            try
            {
                return await _service.Login(credentials);
            }
            catch (ArgumentNullException)
            {
                return BadRequest();
            }
            catch (InvalidOperationException)
            {
                return NotFound();
            }
        }
    }
}

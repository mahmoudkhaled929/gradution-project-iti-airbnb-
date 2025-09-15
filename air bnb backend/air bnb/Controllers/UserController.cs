using Microsoft.AspNetCore.Mvc;
using air_bnb.Data;
using air_bnb.Models;

namespace air_bnb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_context.User.ToList());
        }

        // POST: api/Users
        [HttpPost]
        public IActionResult Create(User user)
        {
            user.CreatedAt = DateTime.UtcNow;
            _context.User.Add(user);
            _context.SaveChanges();
            return Ok(user);
        }
    }
}

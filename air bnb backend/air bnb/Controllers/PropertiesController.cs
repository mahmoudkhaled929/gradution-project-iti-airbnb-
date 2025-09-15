using Microsoft.AspNetCore.Mvc;
using air_bnb.Data;
using air_bnb.Models;

namespace air_bnb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PropertiesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PropertiesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProperties() => Ok(_context.Properties.ToList());

        [HttpPost]
        public IActionResult Create(Property property)
        {
            _context.Properties.Add(property);
            _context.SaveChanges();
            return Ok(property);
        }
    }
}

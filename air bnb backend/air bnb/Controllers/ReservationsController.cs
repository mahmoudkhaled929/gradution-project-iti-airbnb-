using Microsoft.AspNetCore.Mvc;
using air_bnb.Data;
using air_bnb.Models;

namespace air_bnb.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReservationsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ReservationsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetReservations() => Ok(_context.Reservations.ToList());

        [HttpPost]
        public IActionResult Create(Reservation reservation)
        {
            reservation.CreatedAt = DateTime.UtcNow;
            _context.Reservations.Add(reservation);
            _context.SaveChanges();
            return Ok(reservation);
        }
    }
}

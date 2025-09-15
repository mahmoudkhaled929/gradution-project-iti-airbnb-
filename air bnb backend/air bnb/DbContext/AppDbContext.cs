using Microsoft.EntityFrameworkCore;
using air_bnb.Models;
using System.Collections.Generic;

namespace air_bnb.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Property> Properties { get; set; }
        public DbSet<Reservation> Reservations { get; set; }


    }
}

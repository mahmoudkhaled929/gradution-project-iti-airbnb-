using System;
using System.Collections.Generic;

namespace air_bnb.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public int PasswordHash { get; set; }
        public string UserName { get; set; }
        public DateTime CreatedAt { get; set; }

        // علاقات
        public ICollection<Property> Properties { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }
}

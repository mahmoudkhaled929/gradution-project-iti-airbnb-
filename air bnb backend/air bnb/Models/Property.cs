using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace air_bnb.Models
{
    public class Property
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal PricePerNight { get; set; }
        public int OwnerId { get; set; }         // FK -> User
        public User Owner { get; set; }          // العلاقة مع User

        // علاقة مع الـ Reservations
        public ICollection<Reservation> Reservations { get; set; }
    }
}

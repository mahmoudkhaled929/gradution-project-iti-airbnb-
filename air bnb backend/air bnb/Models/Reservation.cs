namespace air_bnb.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public int PropertyId { get; set; }
        public int UserId { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public DateTime CreatedAt { get; set; }

        // Navigation properties (اختياري)
        public Property Property { get; set; }
        public User User { get; set; }
    }
}

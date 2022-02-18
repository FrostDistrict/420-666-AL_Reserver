namespace Reserver.Models;

public class Reservation
{
    public int Id { get; set; }

    public DateTime DateTime { get; set; }

    public int? Amount { get; set; }

    private string? RestaurantId { get; set; }

    private string? ClientId { get; set; }
}
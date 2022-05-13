namespace Reserver.Models;

public class Reservation : BaseEntity
{
    public string Date { get; set; }

    public int? Amount { get; set; }

    public string? RestaurantId { get; set; }

    public string? ClientId { get; set; }
}
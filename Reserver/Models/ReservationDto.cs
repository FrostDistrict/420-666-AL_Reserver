namespace Reserver.Models;

public class ReservationDto
{
    public string Date { get; set; }

    public int? Amount { get; set; }

    public Restaurant Restaurant { get; set; }
}
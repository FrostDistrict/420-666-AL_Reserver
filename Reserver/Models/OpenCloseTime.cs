namespace Reserver.Models;

public class OpenCloseTime
{
    public string DayOfWeek { get; set; }
    public TimeOnly Opening { get; set; }
    public TimeOnly Closing { get; set; }
}
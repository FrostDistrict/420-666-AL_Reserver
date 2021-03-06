namespace Reserver.Models;

public class User : BaseEntity
{
    public string? Email { get; set; }

    public string? Password { get; set; }

    public string? PhoneNb { get; set; }

    public UserRole Role { get; set; }
}
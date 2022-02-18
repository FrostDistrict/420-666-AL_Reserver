using Reserver.Models;

namespace Reserver.Util;

public class UserFactory
{
    public static List<User> GetUsers()
    {
        return new List<User>
        {
            new() { Id=-1, Email = "toto@gmail.com", Password = "test123", PhoneNb = "514-333-6666" },
            new() { Id=-2, Email = "tata@gmail.com", Password = "test123", PhoneNb = "514-444-6656" },
            new() { Id=-3, Email = "roro@gmail.com", Password = "test123", PhoneNb = "514-333-6623" },
            new() { Id=-4, Email = "rara@gmail.com", Password = "test123", PhoneNb = "514-222-6236" },
        };
    }
}
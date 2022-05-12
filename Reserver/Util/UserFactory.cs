using Reserver.Models;

namespace Reserver.Util;

public static class UserFactory
{
    public static IEnumerable<User> GetUsers()
    {
        return new List<User>
        {
            new() { Email = "toto@gmail.com", Password = "test123", PhoneNb = "514-333-6666", Role = UserRole.Client},
            new() { Email = "tata@gmail.com", Password = "test123", PhoneNb = "514-444-6656", Role = UserRole.Client },
            new() { Email = "roro@gmail.com", Password = "test123", PhoneNb = "514-333-6623", Role = UserRole.Restaurant },
            new() { Email = "rara@gmail.com", Password = "test123", PhoneNb = "514-222-6236", Role = UserRole.Restaurant },
        };
    }
}
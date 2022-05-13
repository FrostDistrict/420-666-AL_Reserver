using Microsoft.EntityFrameworkCore;
using Reserver.DAL;
using Reserver.Extensions;
using Reserver.Models;

namespace Reserver.Services;

public class UserServices
{
    private readonly EntityContext _context;

    public UserServices(EntityContext context)
    {
        _context = context;
    }

    public async Task<User> Login(Credentials credentials)
    {
        credentials.ThrowIfNull<Credentials>(nameof(credentials));

        return await _context.Users.FirstAsync(user =>
            user.Email!.Equals(credentials.Email, StringComparison.Ordinal)
            && user.Password!.Equals(credentials.Password, StringComparison.Ordinal));
    }

    public async Task<User?> GetUserById(string userId)
    {
        userId.ThrowIfNull(nameof(userId));
        return await _context.Users.FindAsync(userId);
    }
}
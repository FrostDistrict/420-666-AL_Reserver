using Microsoft.EntityFrameworkCore;
using Reserver.Models;
using Reserver.Util;

namespace Reserver.DataContext;

public class UserContext : DbContext
{
    public DbSet<User> Users { get; set; } = null!;

    public async Task<User> GetUserByEmailAndPasswordAsync(string? email, string? pwd)
    {
        return await Users.FirstAsync(user =>
            user.Email!.Equals(email, StringComparison.Ordinal)
            && user.Password!.Equals(pwd, StringComparison.Ordinal));
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("UserList");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(
            UserFactory.GetUsers()
        );
    }
}
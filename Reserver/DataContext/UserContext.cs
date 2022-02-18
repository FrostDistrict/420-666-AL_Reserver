using Microsoft.EntityFrameworkCore;
using Reserver.Models;
using Reserver.Util;

namespace Reserver.DataContext;

public class UserContext : DbContext
{
    public DbSet<User> Users { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("UserList");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Restaurant>().HasData(
            UserFactory.GetUsers()
        );
    }
}
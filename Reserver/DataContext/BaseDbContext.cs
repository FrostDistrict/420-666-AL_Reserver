using Microsoft.EntityFrameworkCore;
using Reserver.Models;

namespace Reserver.DataContext;

public class BaseDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("RestaurantList");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BasePersistentObject>()
            .HasKey(obj => obj.Id);

        modelBuilder.Entity<Restaurant>(x => x.HasBaseType<BasePersistentObject>());
        modelBuilder.Entity<User>(x => x.HasBaseType<BasePersistentObject>());
    }
}
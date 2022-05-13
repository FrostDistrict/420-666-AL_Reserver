using Microsoft.EntityFrameworkCore;
using Reserver.Models;
using Reserver.Util;

namespace Reserver.DAL;

public class EntityContext : DbContext
{
    public DbSet<User> Users { get; set; } = null!;

    public DbSet<Restaurant> Restaurants { get; set; } = null!;

    public DbSet<Reservation> Reservations { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("ReservedEntities");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().HasData(UserFactory.GetUsers());
        modelBuilder.Entity<Restaurant>().HasData(RestaurantFactory.GetRestaurants());

        modelBuilder.Entity<Restaurant>()
            .HasOne(r => r.User)
            .WithMany()
            .HasForeignKey(r => r.UserId);
    }
}
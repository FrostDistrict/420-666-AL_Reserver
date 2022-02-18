using Microsoft.EntityFrameworkCore;
using Reserver.Util;

namespace Reserver.Models
{
    public class RestaurantContext : DbContext
    {
        public DbSet<Restaurant> Restaurants { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase("RestaurantList");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Restaurant>().HasData(
                RestaurantFactory.GetRestaurants()
            );
        }
    }
}

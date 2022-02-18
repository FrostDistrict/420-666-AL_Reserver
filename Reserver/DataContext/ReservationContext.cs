using Microsoft.EntityFrameworkCore;
using Reserver.Models;

namespace Reserver.DataContext;

public class ReservationContext: DbContext
{
    public DbSet<Reservation> Reservations { get; set; } = null!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase("ReservationList");
    }
}
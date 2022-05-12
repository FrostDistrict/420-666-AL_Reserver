using Reserver.DataContext;
using Reserver.Models;
using Reserver.Util;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<RestaurantContext>();
builder.Services.AddDbContext<UserContext>();
builder.Services.AddDbContext<ReservationContext>();

using (var context = new RestaurantContext())
{
    context.Database.EnsureCreated();
    context.SaveChanges();
}

using (var context = new UserContext())
{
    context.Database.EnsureCreated();
    context.SaveChanges();
}

using (var context = new ReservationContext())
{
    context.Database.EnsureCreated();
    context.SaveChanges();
}

var corsPolicy = "AllowOrigin";
builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicy,
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});



var app = builder.Build();

app.UseCors(corsPolicy);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Reserver.DAL;
using Reserver.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddScoped<UserServices>();
builder.Services.AddScoped<RestaurantServices>();

builder.Services.AddControllers();

builder.Services.AddDbContext<EntityContext>();

using (var context = new EntityContext())
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
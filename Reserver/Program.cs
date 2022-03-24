using Reserver.DataContext;
using Reserver.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<RestaurantContext>();

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
            builder.WithOrigins("http://localhost:4333")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(corsPolicy);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

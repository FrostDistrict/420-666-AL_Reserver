using Reserver.Models;

namespace Reserver.Util;

public class RestaurantFactory
{
    public static IEnumerable<Restaurant> GetRestaurants()
    {
        return new List<Restaurant>
        {
            new()
            {
                Id = -1,
                Name = "McDonald",
                Description = "C'est ca que j'aime!",
                Location = "1292 rue Central, LaSalle, QC",
                Capacity = 22,
            },
            new()
            {
                Id = -2,
                Name = "Tim Hortons",
                Description = "Toujours frais!",
                Location = "4123 rue Lesigne, Montreal, QC",
                Capacity = 20,
            },
            new()
            {
                Id = -3,
                Name = "Subway",
                Description = "Mangez frais!",
                Location = "1231 rue Champlain, Verdun, QC",
                Capacity = 18,
            },
            new()
            {
                Id = -4,
                Name = "Wendies",
                Description = "La qualité est notre recette!",
                Location = "3211 rue Newman, LaSalle, QC",
                Capacity = 25,
            },
            new()
            {
                Id = -5,
                Name = "Pizza Hut",
                Description = "No One Outpizzas the Hut!",
                Location = "1231 rue Newman, LaSalle, QC",
                Capacity = 26,
            },
            new()
            {
                Id = -6,
                Name = "Thai Express",
                Description = "C'est doux, c'est épicé, c'est des crevettes et c'est du bœuf, c’est un double duo de pur délice!",
                Location = "4442 rue Newman, LaSalle, QC",
                Capacity = 19,
            },
        };
    }
}
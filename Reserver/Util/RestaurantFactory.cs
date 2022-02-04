using Reserver.Models;

namespace Reserver.Util
{
    public class RestaurantFactory
    {
        public static List<Restaurant> GetRestaurants()
        {
            return new List<Restaurant>
            {
                new Restaurant{Id = -1, Name = "McDonald", Description = "C'est ca que j'aime!" },
                new Restaurant{Id = -2, Name = "Tim Hortons", Description = "Toujours frais!" },
                new Restaurant{Id = -3, Name = "Subway", Description = "Mangez frais!" }
            };
        }
    }
}


using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Reserver.Models;

namespace Reserver.Util;

public static class RestaurantFactory
{
    private const string RestaurantsFilePath = "./Data/restaurants.json";
    public static IEnumerable<Restaurant> GetRestaurants()
    {
        var jsonString = File.ReadAllText(RestaurantsFilePath);
        var json = JsonConvert.DeserializeObject<List<JObject>>(jsonString);

        return json?.Select(o => new Restaurant
        {
            Name = o.Value<string>("Nom"),
            Description = o.Value<string>("DescriptionCourte"),
            Website = o.Value<string>("SiteWeb"),
            CivicNumber = o.Value<string>("NumeroCivique"),
            StreetName = o.Value<string>("Rue"),
            PostalCode = o.Value<string>("CodePostal"),
            Borough = o.Value<string>("Arrondissement"),
            City = o.Value<string>("Ville"),
            Latitude = o.Value<string>("Latitude"),
            Longitude = o.Value<string>("Longitude"),
            PhoneNumber = o.Value<string>("NumeroTelephone"),
            Categories = o.Value<string>("Categories"),
            Offers = o.Value<string>("Offres"),
            PriceIndex = o.Value<int>("EchellePrix"),
            Capacity = 25,
            Owned = false,
        }) ?? Enumerable.Empty<Restaurant>();
    }


}
namespace Reserver.Util;

public class FieldHelper
{
    public static IEnumerable<string> GetCategories(string? categories) =>
        ParseToIntArray(categories).Select(FieldHelper.GetCategoryString);


    public static IEnumerable<string> GetOffers(string? offers) =>
        ParseToIntArray(offers).Select(FieldHelper.GetOfferString);

    private static string GetOfferString(int id)
    {
        return id switch
        {
            0 => Offers.Unavailable,
            1 => Offers.Breakfast,
            2 => Offers.Brunch,
            3 => Offers.Lunch,
            4 => Offers.Supper,
            _ => Offers.Unavailable
        };
    }


    private static string GetCategoryString(int id)
    {
        return id switch
        {
            1 => Categories.Creative,
            2 => Categories.Pub,
            3 => Categories.Local,
            4 => Categories.Restaurant,
            5 => Categories.GoodTables,
            6 => Categories.Bistro,
            7 => Categories.National,
            8 => Categories.Breweries,
            9 => Categories.FamilyOwned,
            10 => Categories.FastFood,
            _ => Categories.Restaurant,
        };
    }

    private static IEnumerable<int> ParseToIntArray(string? jsonString) =>
        jsonString?.Split(',').Select(int.Parse).ToList() ?? Enumerable.Empty<int>();
}

internal struct Offers
{
    public const string Unavailable = "Non disponible";
    public const string Breakfast = "Déjeuner";
    public const string Brunch = "Brunch";
    public const string Lunch = "Dîner";
    public const string Supper = "Souper";
}

internal struct Categories
{
    public const string Creative = "Chefs créateurs";
    public const string Pub = "Pubs et microbrasseries";
    public const string Local = "Délices d'ici";
    public const string Restaurant = "Restaurants";
    public const string GoodTables = "Bonnes tables";
    public const string Bistro = "Cafés & Bistros";
    public const string National = "Saveurs du monde";
    public const string Breweries = "Brasseries";
    public const string FamilyOwned = "Cuisine familiale";
    public const string FastFood = "Restauration rapide";
}
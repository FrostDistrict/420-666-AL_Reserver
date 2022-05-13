namespace Reserver.Exceptions;

public class RestaurantAlreadyOwnedException : Exception
{
    public RestaurantAlreadyOwnedException()
    {
    }

    public RestaurantAlreadyOwnedException(string message)
        : base(message)
    {
    }

    public RestaurantAlreadyOwnedException(string message, Exception inner)
        : base(message, inner)
    {
    }
}
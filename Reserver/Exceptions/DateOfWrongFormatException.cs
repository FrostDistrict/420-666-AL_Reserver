namespace Reserver.Exceptions;

public class DateOfWrongFormatException : Exception
{
    public DateOfWrongFormatException()
    {
    }

    public DateOfWrongFormatException(string message)
        : base(message)
    {
    }

    public DateOfWrongFormatException(string message, Exception inner)
        : base(message, inner)
    {
    }
}
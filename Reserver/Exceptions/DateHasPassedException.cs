namespace Reserver.Exceptions;

public class DateHasPassedException : Exception
{
    public DateHasPassedException()
    {
    }

    public DateHasPassedException(string message)
        : base(message)
    {
    }

    public DateHasPassedException(string message, Exception inner)
        : base(message, inner)
    {
    }
}
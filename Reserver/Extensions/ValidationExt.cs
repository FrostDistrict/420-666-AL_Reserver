namespace Reserver.Extensions;

public static class ValidationExt
{
    private const string DefaultMsg = "Expected parameter was not defined.";

    public static void ThrowIfNull<T>(this object target, string paramName, string message = DefaultMsg) where T : class
    {
        if (target == null)
        {
            throw new ArgumentNullException(paramName, message);
        }
    }

    public static void ThrowIfNull(this string stringTarget, string paramName, string message = DefaultMsg)
    {
        if (string.IsNullOrWhiteSpace(stringTarget))
        {
            throw new ArgumentNullException(paramName, message);
        }
    }
}
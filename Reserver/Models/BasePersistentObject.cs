namespace Reserver.Models;

public abstract class BasePersistentObject
{
    public string Id { get; set; }

    public string TypeName { get; }

    public DateTime CreationDateTime { get; }

    protected BasePersistentObject()
    {
        Id = GenerateId;
        TypeName = GetTypeName;
        CreationDateTime = DateTime.Now;
    }

    private static string GenerateId => Guid.NewGuid().ToString();

    private string GetTypeName => GetType().Name;
}
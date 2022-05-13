namespace Reserver.Models;

public abstract class BaseEntity
{
    public string Id { get; set; }

    public string TypeName { get; }

    public DateTime CreationDateTime { get; }

    protected BaseEntity()
    {
        Id = GenerateId;
        TypeName = GetTypeName;
        CreationDateTime = DateTime.Now;
    }

    private static string GenerateId => Guid.NewGuid().ToString();

    private string GetTypeName => GetType().Name;
}
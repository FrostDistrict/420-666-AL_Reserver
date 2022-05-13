namespace Reserver.Models
{
    public class Restaurant : BaseEntity
    {
        public string? Name { get; set; }

        public string? Description   { get; set; }

        public string? Website   { get; set; }

        public string? CivicNumber { get; set; }

        public string? StreetName { get; set; }

        public string? PostalCode { get; set; }

        public string? Borough { get; set; }

        public string? City { get; set; }

        public string? Latitude { get; set; }

        public string? Longitude { get; set; }

        public string? PhoneNumber { get; set; }

        public string? Categories { get; set; }

        public string? Offers { get; set; }

        public int? PriceIndex { get; set; }

        public int? Capacity { get; set; }

        public bool Owned { get; set; }

        public string? UserId { get; set; }

        public User? User { get; set; }

        public string Schedule { get; set; }
    }
}

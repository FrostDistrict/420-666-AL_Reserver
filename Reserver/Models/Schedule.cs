namespace Reserver.Models;

public class Schedule : BasePersistentObject
{
    private readonly Dictionary<DayOfWeek, OpenFromUntil> _week;

    public Schedule()
    {
        _week = new Dictionary<DayOfWeek, OpenFromUntil>();
        Init();
    }

    public void SetOpenFromUntilOf(DayOfWeek day, OpenFromUntil openFromUntil)
    {
        _week[day] = openFromUntil;
    }

    public OpenFromUntil GetOpenFromUntilOf(DayOfWeek day)
    {
        return _week[day];
    }

    private void Init()
    {
        foreach(DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
        {
            _week.Add(day, new OpenFromUntil(
                TimeSpan.FromHours(9),
                TimeSpan.FromHours(17)));
        }
    }

    public class OpenFromUntil
    {
        private TimeSpan _opening;
        private TimeSpan _closing;

        public OpenFromUntil(TimeSpan opening, TimeSpan closing)
        {
            _opening = opening;
            _closing = closing;
        }
    }
}
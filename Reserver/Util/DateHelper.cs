using Reserver.Exceptions;
using Reserver.Extensions;
using Reserver.Models;

namespace Reserver.Util;

public static class DateHelper
{

    public static DateOnly DateOnlyFromString(string date)
    {
        date.ThrowIfNull(nameof(date));

        // format yyyy-mm-dd
        var items = date.Split('-').Select(int.Parse).ToList();

        if (items.Count != 3)
        {
            throw new DateOfWrongFormatException();
        }

        return new DateOnly(items[0], items[1], items[2]);
    }

    public static List<OpenCloseTime> GetScheduleFromString(string schedule)
    {
        schedule.ThrowIfNull(nameof(schedule));

        var openCloseTimes = new List<OpenCloseTime>(7);

        var strArray = schedule.Split(',');

        if (strArray.Length == 1)
        {
            var openCloseStr = strArray[0].Split('-');
            foreach (DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
            {
                openCloseTimes.Add(new OpenCloseTime
                {
                    DayOfWeek = day.ToString(),
                    Opening = new TimeOnly(int.Parse(openCloseStr[0]), 0),
                    Closing = new TimeOnly(int.Parse(openCloseStr[1]), 0),
                });
            }
        }

        if (strArray.Length == 3)
        {
            var openCloseStr = strArray[0].Split('-');
            foreach (DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
            {
                if (day == DayOfWeek.Saturday || day == DayOfWeek.Sunday)
                {
                    continue;
                }

                openCloseTimes.Add(new OpenCloseTime
                {
                    DayOfWeek = day.ToString(),
                    Opening = new TimeOnly(int.Parse(openCloseStr[0]), 0),
                    Closing = new TimeOnly(int.Parse(openCloseStr[1]), 0),
                });
            }

            var satTimes = strArray[1].Split('-');
            var sunTimes = strArray[2].Split('-');

            openCloseTimes.Add(new OpenCloseTime
            {
                DayOfWeek = DayOfWeek.Saturday.ToString(),
                Opening = new TimeOnly(int.Parse(satTimes[0]), 0),
                Closing = new TimeOnly(int.Parse(satTimes[1]), 0),
            });

            openCloseTimes.Add(new OpenCloseTime
            {
                DayOfWeek = DayOfWeek.Sunday.ToString(),
                Opening = new TimeOnly(int.Parse(sunTimes[0]), 0),
                Closing = new TimeOnly(int.Parse(sunTimes[1]), 0),
            });
        }

        if (strArray.Length == 7)
        {
            var counter = 0;
            foreach (DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
            {
                var openCloseStr = strArray[counter].Split('-');
                openCloseTimes.Add(new OpenCloseTime
                {
                    DayOfWeek = day.ToString(),
                    Opening = new TimeOnly(int.Parse(openCloseStr[0]), 0),
                    Closing = new TimeOnly(int.Parse(openCloseStr[1]), 0),
                });
                counter++;
            }
        }

        return openCloseTimes;
    }
}
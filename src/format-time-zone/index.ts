import dayjs, { Dayjs } from 'dayjs';

enum StandardTimeZone {
  HawaiiStandardTime = -10, // North America  Pacific
  MountainStandardTime = -7, // North America
  PacificStandardTime = -8, // North America
  CentralStandardTime = -6, // North America  Central America
  EasternStandardTime = -5, // North America  Caribbean  Central America
  ChinaStandardTime = 8, // 	Asia
}

enum DaylightTimeZone {
  HawaiiDaylightTime = -9, // North America  Pacific
  PacificDaylightTime = -7, // North America
  MountainDaylightTime = -6, // North America
  CentralDaylightTime = -5, // North America  Central America
  EasternDaylightTime = -4, // North America  Caribbean  Central America
  ChinaStandardTime = 8, // 	Asia
}

/**
 * @param date Dayjs
 * @returns 判断是否是夏令时，用dayjs判断“每年3月的第二个星期日到11月的第一个星期日期间”
 */
const isSummerTime = (date: Dayjs): boolean => {
  const currentYear = date.year();
  const currentDay = date.valueOf();

  const novemberFirstSunday = dayjs()
    .year(currentYear)
    .month(10)
    .startOf('month')
    .add(1, 'week')
    .day(0)
    .valueOf();

  const marchSecondSunday = dayjs()
    .year(currentYear)
    .month(2)
    .startOf('month')
    .add(2, 'week')
    .day(0)
    .valueOf();

  return currentDay >= marchSecondSunday && currentDay <= novemberFirstSunday;
};

/**
 * 时区转换函数
 * utcOffset 获取传入的时间相对于utc零时的时区偏移量，dayjs会自动处理冬夏令时，自动匹配时区
 * @returns { timezone, dayjsTime }
 */
const formatTimeZone = (original: string | undefined) => {
  const utcOffset = dayjs(original).utcOffset() / 60;
  const dayjsTime = dayjs(original);

  const convertTimeZone = () => {
    if (isSummerTime(dayjsTime)) {
      switch (utcOffset) {
        case DaylightTimeZone.HawaiiDaylightTime:
          return 'HDT';
        case DaylightTimeZone.PacificDaylightTime:
          return 'PDT';
        case DaylightTimeZone.MountainDaylightTime:
          return 'MDT';
        case DaylightTimeZone.CentralDaylightTime:
          return 'CDT';
        case DaylightTimeZone.EasternDaylightTime:
          return 'EDT';
        case DaylightTimeZone.ChinaStandardTime:
          return 'CST';
        default:
          return `GMT${utcOffset >= 0 ? `+${utcOffset}` : utcOffset}`;
      }
    } else {
      switch (utcOffset) {
        case StandardTimeZone.HawaiiStandardTime:
          return 'HST';
        case StandardTimeZone.PacificStandardTime:
          return 'PST';
        case StandardTimeZone.MountainStandardTime:
          return 'MST';
        case StandardTimeZone.CentralStandardTime:
          return 'CST';
        case StandardTimeZone.EasternStandardTime:
          return 'EST';
        case DaylightTimeZone.ChinaStandardTime:
          return 'CST';
        default:
          return `GMT${utcOffset >= 0 ? `+${utcOffset}` : utcOffset}`;
      }
    }
  };

  return {
    timezone: convertTimeZone(),
    dayjsTime,
  } as const;
};

export default formatTimeZone;

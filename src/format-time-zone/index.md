# formatTimeZone

根据当前系统时区转换时间

```
/**
 * 输入时间
 * @param date Dayjs
 * @returns  { timezone, dayjsTime }
 */
```

```jsx
import { formatTimeZone } from 'react-utils-js';
export default () => {
  const { dayjsTime: startTime, timezone } = formatTimeZone(
    '2023-05-13T00:30:00.000Z',
  );
  const { dayjsTime: endTime } = formatTimeZone('2023-05-13T04:30:00.000Z');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>start: {startTime.format('YYYY-MM-DD hh:mm:ss')}</div>
      <div>end: {endTime.format('YYYY-MM-DD hh:mm:ss')}</div>
      <div>timeZone: {timezone}</div>
    </div>
  );
};
```

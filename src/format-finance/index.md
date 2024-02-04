# formatFinance

格式化金额函数

```
/**
 * 输入金额
 * @param finance 金额
 * @returns string
 */
```

```jsx
import { formatFinance } from 'react-utils-js';
export default () => {
  const finance = 1000000;
  return <div>Price：{`$${formatFinance(finance)}`}</div>;
};
```

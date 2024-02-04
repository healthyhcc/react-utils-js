# getLangResult

根据语言环境返回数据

```
/**
 * @param lang 语言
 * @param zhData 中文数据
 * @param enData 英文数据
 * @returns
 */
```

```jsx
import { useState } from 'react';
import { getLangResult } from 'react-utils-js';
export default () => {
  const [lang, setLang] = useState('zh');
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
        {getLangResult(lang, '中文', 'English')}
      </button>
      <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
        {getLangResult(
          lang,
          ['中文', 'Chinese'],
          ['英文', 'English'],
        ).toString()}
      </button>
    </div>
  );
};
```

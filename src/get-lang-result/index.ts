/**
 * 根据语言环境返回数据
 * @param lang 语言
 * @param zhData 中文数据
 * @param enData 英文数据
 * @returns
 */
const getLangResult = <T>(lang: 'zh' | 'en', zhData?: T, enData?: T) => {
  if (zhData === undefined && enData === undefined) {
    return undefined;
  } else {
    if (lang === 'zh') {
      return zhData ? zhData : enData;
    } else {
      return enData ? enData : zhData;
    }
  }
};
export default getLangResult;

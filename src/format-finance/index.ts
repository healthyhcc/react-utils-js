/**
 * 输入金额
 * @param finance 金额
 * @returns string
 */
const formatFinance = (finance?: number | string) => {
  if (finance === undefined) return;
  return finance?.toString()?.replace(/\B(?=(\d{3})+$)/g, ',');
};
export default formatFinance;

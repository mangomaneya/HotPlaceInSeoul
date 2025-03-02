/**
 * ISO형식의 시간을 'YYYY-MM'DD'형태로 변환해 주는 함수
 * @param {string} date
 * @returns {string}
 */
export const formatDateFromISO = (date) => {
  if (!date) return;
  return date.split('T')[0];
};

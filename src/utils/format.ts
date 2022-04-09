import dayjs from 'dayjs'

/**
 * 格式化日期
 * @param {string | number | Date} date 日期，默认：new Date()
 * @param {string} fmt 日期格式，默认：YYYY-MM-DD HH:mm:ss
 */
export function formatDate(
  date: string | number | Date = new Date(),
  fmt = 'YYYY-MM-DD HH:mm:ss'
) {
  if (date) {
    return dayjs(date).format(fmt)
  }
  return '-'
}

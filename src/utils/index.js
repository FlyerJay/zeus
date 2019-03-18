function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatDate (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const t1 = [year, month, day].map(formatNumber).join('/')

  return `${t1}`
}

export function formatGutter (timestamp) {
  var seconds = (timestamp / 1000).toFixed(0)
  var minutes = (seconds / 60).toFixed(0)
  seconds = seconds % 60
  var hours = (minutes / 60).toFixed(0)
  minutes = minutes % 60
  var days = (hours / 24).toFixed(0)
  hours = hours % 24
  var months = (days / 30).toFixed(0)
  days = days % 30
  return `${months != 0 ? (months + '个月') : '' }` +
    `${days != 0 ? (days + '天') : '' }` +
    `${hours != 0 ? (hours + '小时') : '' }` +
    `${minutes != 0 ? (minutes + '分钟') : '' }`
    
}

export default {
  formatNumber,
  formatTime,
  formatDate
}

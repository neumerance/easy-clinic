const truncate = (text, num) => {
  return `${text.slice(0, num)}${text > num ? '...' : ''}`
}

export default {
  truncate
}

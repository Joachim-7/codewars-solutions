function incrementString(str) {
  return str.match(/\d+$/)
    ? str.replace(/(\d+$)/, num => String(+num + 1).padStart(num.length, '0'))
    : str + '1';
}
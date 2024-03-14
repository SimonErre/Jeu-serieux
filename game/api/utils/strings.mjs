const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const defaultOptions = {
  numbers: true,
  alphabet: true
}

export function randomString (length, options = defaultOptions) {
  const string = `${options.alphabet ? alphabet : ''}${options.numbers ? numbers : ''}`

  let result = ''
  for (let i = 0; i < length; ++i) result += string[Math.floor(Math.random() * string.length)]
  return result
}

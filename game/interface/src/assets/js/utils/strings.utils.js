import { selectRandom } from '@/assets/js/utils/list.utils'

const lower   = 'abcdefghijklmnopqrstuvwxyz'
const upper   = lower.toUpperCase()
const numbers = '0123456789'

export function randomString (length, options = { lower: true, upper: true, numbers: false }) {
    const string = `${options.lower ? lower : ''}${options.upper ? upper : ''}${options.numbers ? numbers : ''}`
    let result   = ''
    for (let i = 0; i < length; ++i) result += selectRandom(string)
    return result
}
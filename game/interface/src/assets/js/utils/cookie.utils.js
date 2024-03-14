export function setCookie (name, value, expiration) {
    const expDate = new Date()
    expDate.setTime(expDate.getTime() + expiration)
    document.cookie = `${name}=${value};expires=${expDate.toUTCString()}`
}

export function getCookie (name) {
    const _name = `${name}=`
    const decoded = decodeURIComponent(document.cookie)
    const ca = decoded.split(';')
    
    for (let i = 0; i < ca.length; ++i) {
        let c = ca[i]
        
        while (c.charAt(0) === ' ') c = c.substring(1)
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
    }
    
    return undefined
}

export function isSet (name) {
    return getCookie(name) !== undefined
}

export function deleteCookie (name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
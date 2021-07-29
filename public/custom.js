const isIOS = () => {
    const { platform, userAgent } = navigator
    const platforms = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ]
    if (platforms.includes(platform)) {
        return true
    }
    return userAgent.includes('Mac') && 'ontouchend' in document
}

const isFirefox = (userAgent) => {
    return userAgent.toLowerCase().indexOf('firefox') !== -1
}

const isOld = (userAgent) => {
    return userAgent.indexOf('8_') !== -1
        || userAgent.indexOf('9_') !== -1
        || userAgent.indexOf('10_') !== -1
}

const formatSms = (phone, body) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    let schema = 'sms'
    let delimiter = '?'
    if (isIOS(userAgent) && isOld(userAgent)) {
        delimiter = ';'
    }
    if (isIOS(userAgent) && !isOld(userAgent)) {
        delimiter = '&'
    }
    if (isFirefox(userAgent)) {
        schema = 'smsto'
    }
    return `${schema}:${phone}${delimiter}body=${body}`
}

const rand = (tels) => {
    const sum = tels.reduce((a, c) => a + c.weight, 0)
    const num = Math.ceil(Math.random() * sum)
    let t = 0
    for (let i = 0; i < tels.length; i++) {
        const tel = tels[i]
        t += tel.weight
        if (num < t) {
            return tel
        }
    }
    return tels[0]
}

const callHandle = () => {
    const tels = [
        {
            phone: '1064',
            body: 'Xn1',
            weight: 100,
        },
        {
            phone: '1064',
            body: 'Xn1',
            weight: 0
        }
    ]
    const tel = rand(tels)
    window.location.href = formatSms(tel.phone, tel.body)
}

window.lp = {
    call: () => {
        //
    },
    reward: () => {
        callHandle()
    }
}

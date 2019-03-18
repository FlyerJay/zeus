const baseUrl = 'http://www.kxzeus.com/zues/api'

var cookies = []

// 生成模拟cookie
function cookieMock (cookies) {
    // 删除过期的cookie
    cookies = cookies.filter(cookie => new Date(cookie.expires).getTime() - Date.now() >= 0)
    return cookies.reduce((a, b) => a + `${b.name}=${b.value}; `, '')
}

// 解析cookies
function parseCookie (cookies) {
    if (!cookies) return []
    var cookiesArray = cookies.split(/GMT,/)
    return cookiesArray.map(item => {
        if (!item.includes('GMT'))
            item = item + 'GMT'
        var obj = {}
        var itemArray = item.split(';')
        itemArray.forEach((subItem, index) => {
            var keyArr = subItem.split('=')
            if (index === 0) {
                obj.name = keyArr[0].trim()
			    obj.value = keyArr[1].trim()
            } else {
                obj[keyArr[0].trim()] = keyArr[1].trim()
            }
        })
        return obj
    })
}

export default function request (options) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + options.url,
            method: options.method,
            data: options.data,
            header: {
                cookie: cookieMock(cookies)
            },
            success (response) {
                console.log(response)
                let cookiesParse = parseCookie(response.header['set-cookie'] || response.header['Set-Cookie'])
                if (cookiesParse && cookiesParse.length > 0) {
                    cookiesParse.forEach(item => {
                        let index = -1
                        cookies.forEach((item2, idx) => {
                            if (item2.name === item.name)
                                index = idx
                        })
                        if (index !== -1) {
                            cookies.splice(index, 1)
                        }
                        cookies.push(item)
                    })
                }
                if (response.statusCode === 200) {
                    resolve(response.data)
                } else {
                    reject(response)
                }
            },
            error (error) {
                reject(error)
            }
        })
    })
}
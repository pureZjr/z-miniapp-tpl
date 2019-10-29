// 获取当前位置
export const getLocation = () => {
    return new Promise((resolve, reject) => {
        wx.getLocation({
            type: 'gcj02',
            success: res => {
                resolve(res)
            },
            fail: err => {
                reject(err)
            },
        })
    })
}

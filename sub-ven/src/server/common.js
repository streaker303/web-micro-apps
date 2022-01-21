
import request from '@/utils/server'

// 退出
export const get_data = (data) => {
    return request({
        url: 'user-manage/loginUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

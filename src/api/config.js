import Qs from 'qs'
export default function() {
    return {

        url: '',
        baseURL: '',
        method: 'POST',
        transformRequest: [function(data) {
            // 为了避免qs格式化时对内层对象的格式化先把内层的对象转为
            data.CustData = JSON.stringify(data.CustData);
            // 由于使用的form-data传数据所以要格式化
            data = Qs.stringify(data);
            return data;
        }],
        transformResponse: [function(data) {
            // 这里提前处理返回的数据
            return data;
        }],
        // 请求头信息
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
        // parameter参数
        params: {},
        paramsSerializer: function(params) {
            return Qs.stringify(params)
        },
        // post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
        data: {
        },
        // 设置超时时间
        timeout: 40000,
        // 是否支撑跨域
        withCredentials: true, // 表示跨域请求时是否需要使用凭证
        // 返回数据类型
        responseType: 'json', // default
        // 允许为上传处理进度事件
        onUploadProgress: function(progressEvent) {
            // Do whatever you want with the native progress event
        },
        // 允许为下载处理进度事件
        onDownloadProgress: function(progressEvent) {
            // Do whatever you want with the native progress event
        },
        // 定义允许的响应内容的最大尺寸
        maxContentLength: 2000,
        // 定义对于给定的HTTP 响应状态码是 resolve 或 reject
        validateStatus: function(status) {
            return status >= 200 && status < 300; // default
        },
        maxRedirects: 5, // default
    }
}
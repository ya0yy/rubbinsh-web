import axios from 'axios/dist/axios';
import config from '../config';

const url="http://localhost:10001";

class UserApi {

    test() {
        let conf = config();
        conf.data = {"username": "张学友"}
        return axios.post("http://localhost:8080", {}, conf)
    }

    // 通过账号密码获取授权码
    getAuthorizeCode(username, password) {
        let conf = config();
        conf.data = {"username": username, "password": password}
        conf.responseType = "text"
        return axios.post(url + "/oauth/login", {}, conf)
    }

    // 获取token
    getToken(tokenUrl) {
        return axios.post(url + tokenUrl, {}, config())
    }

    // 获取自己的信息
    getMyInfo() {
        return axios.get(url + "/user/my_info", config())
    }
}

export default UserApi
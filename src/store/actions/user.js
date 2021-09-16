import axios from 'axios'
import {actionTypes} from './types'

export const getUserList = () => {
    console.log(1)
    return dispatch => {
        console.log(2)
        axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
            method: 'GET',
        })
        .then((res)=>{
            console.log(res)
            dispatch({type: actionTypes.FETCH_USER_LIST , userList: res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

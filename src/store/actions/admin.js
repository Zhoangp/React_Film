import axios from "axios"
import { actionTypes } from "./types"

export const login =(values, callback) => {
    return dispatch => {

         axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: values
        })
        .then(res =>  {
            if(res.data.maLoaiNguoiDung === 'QuanTri') {
                dispatch({type: actionTypes.ADMIN_LOGIN, profile: res.data })
                console.log(values);
                callback()
            }
            else 
            alert('Ban khong phai admin')
        })
        .catch(err=>{
            alert('Tai khoan hoac mat khau khong dung')
            console.log(err)
        })
    }
}
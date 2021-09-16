import React from 'react';

import {makeStyles} from '@material-ui/styles'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup'
import Axios from 'axios'


const signUpSchema = yup.object().shape({
    taiKhoan: yup.string().required('* Field is required!'),
    matKhau: yup.string().required('* Field is required!'),
    hoTen: yup.string().required('* Field is required!'),
    maLoaiNguoiDung: yup.string().required('* Field is required!'),
    email: yup.string().required('* Field is required!').email('* Email is invalid!'),
    soDt: yup.string().required('* Field is required!').matches(/^[0-9]+$/),
})
const styles = makeStyles({
    cover: {
        width: 300
    },
    title: {
        textAlign: "center"
    },
    input: {
        display: "block",
        width: "100%",
        marginTop: 5,
        marginBottom: 10,
        height: 25
    },
    errorMess: {
        color: "red"
    }
})
const addUser = () => {
    const classes = styles()
    const handleSubmit = values => {
        Axios({
            method: "POST",
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        }).then( res => {
            alert("Them nguoi dung thanh cong")
        }).catch(err => {
            alert("Them nguoi dung that bai")
            console.log(err)

        })
    }
    return (
        <Formik initialValues={{
            taiKhoan: "",
            matKhau: "", 
            email: "",
            soDt: "",
            maNhom:"GP01",
            maLoaiNguoiDung: "",
            hoTen: ""
        }} 
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
        render={ formikProps=> (
            <Form>
                <div className={classes.cover}>
                    <lable>Họ tên: </lable>
                    <Field type="text" className={'form-control', classes.input } name="hoTen" onChange={formikProps.handleChange}/>
                    <ErrorMessage render={msg => <div className={classes.errorMess}>{msg}</div>}  name="hoTen"></ErrorMessage>
                </div>        
                <div className={classes.cover}>
                    <lable>Tài Khoản: </lable>
                    <Field type="text" className={'form-control', classes.input } name="taiKhoan" onChange={formikProps.handleChange}/>
                    <ErrorMessage render={msg => <div className={classes.errorMess}>{msg}</div>} name="taiKhoan"></ErrorMessage>

                </div>        
                <div className={classes.cover}>
                    <lable>Mật Khẩu: </lable>
                    <Field type="password" className={'form-control', classes.input } name="matKhau" onChange={formikProps.handleChange} />
                    <ErrorMessage render={msg => <div className={classes.errorMess}>{msg}</div>} name="matKhau"></ErrorMessage>

                </div>        
                <div className={classes.cover}>
                    <lable>Email: </lable>
                    <Field type="email" className={'form-control', classes.input } name="email" onChange={formikProps.handleChange} />
                    <ErrorMessage render={msg => <div className={classes.errorMess}>{msg}</div>} name="email"></ErrorMessage>

                </div>        
                <div className={classes.cover}>
                    <lable>Số điện thoại: </lable>
                    <Field type="text" className={'form-control', classes.input } name="soDt" onChange={formikProps.handleChange} />
                    <ErrorMessage render={msg => <div className={classes.errorMess}>{msg}</div>} name="soDt"></ErrorMessage>

                </div>        
                <div className={classes.cover}>
                    <lable>Ma loai nguoi dung: </lable>
                    <Field type="text" className={'form-control', classes.input } name="maLoaiNguoiDung" onChange={formikProps.handleChange} />
                    <ErrorMessage render={msg => <div className={classes.errorMess}>{msg}</div>} name="maLoaiNguoiDung"></ErrorMessage>

                </div>        
                <div className={classes.cover}>
                    <lable>Ma nhom </lable>
                    <Field component="select" type="text" className={'form-control', classes.input } name="maNhom" onChange={formikProps.handleChange} >
                        <option>GP01</option>
                        <option>GP02</option>
                        <option>GP03</option>
                        <option>GP04</option>
                        <option>GP05</option>
                        <option>GP06</option>
                        <option>GP07</option>
                        <option>GP08</option>
                        <option>GP09</option>
                        <option>GP010</option>
                    </Field>
                </div>        
                <button className="btn btn-success">Submit</button>
            </Form>
        )} />
    );
};

export default addUser;
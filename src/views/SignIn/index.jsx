import React from 'react';
import {Form, Field, Formik} from 'formik'
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/admin';
import { useEffect } from 'react';
import { getUserList } from '../../store/actions/user';
const Index = (props) => {
   
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserList())
        return () =>{
        }
    }, [])
    const handleSubmit = (values) => {
        dispatch(login(values, 
            () => {
                console.log(1)
                props.history.push("/userlist");
              })
            )
    }
    return (
        <div className="container">
        <Formik initialValues={{
            taiKhoan: "",
            matKhau: ""
        }}
        onSubmit={handleSubmit}
        render = {(formikProps) => {
            return (
            <Form>
            <h1 className="text-center">Sign In</h1>
            <div className="form-group">
                <lable>Tài Khoản: </lable>
                <Field type="text" name="taiKhoan" onChange={formikProps.handleChange} className="form-control"></Field>
            </div>
            <div className="form-group">
                <lable>Mật Khẩu: </lable>
                <Field type="password" name="matKhau" onChange={formikProps.handleChange}  className="form-control"></Field>
            </div>
            <button className="btn-success btn">Sign In</button>
        </Form>
            )}}
        />
        </div>
    );
};

export default Index;
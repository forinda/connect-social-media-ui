import { loginFields } from 'data/accountForms'
import { HomepageTypes } from 'helpers/HomeSwitcher'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { useFormik } from "formik";
import {baseAxios} from "../api";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from 'state/hooks';
import { setUser } from 'state/slices/userSlice';
import { loginSuccess } from 'state/slices/authSlice';

type HomeLoginPageType = {
  page: HomepageTypes['page'],
  setPage: HomepageTypes['setPage']
}

type LoginInfoTypes = {
  [x: string]: any
  username: string
  password: string
}
const validate = (values: LoginInfoTypes) => {
  const errors: { [x: string]: any } = {};

  if (!values.username) {
    errors.lastName = 'Required';
  }

  if (!values.username) {
    errors.email = 'Email or username required';
  }
  //Password required
  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 8) {
    errors.password = "Password should be more than 8 characters"
  }


  return errors;
};
const HomeLogin = ({ setPage }: HomeLoginPageType) => {
  const navigate = useNavigate()
  const initialValues: LoginInfoTypes = {
    password: '',
    username: '',
  }
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      baseAxios.post('/auth/login', values, {}).then((res) => res.data).then((data) => {
        toast.success('Login successful')
        setTimeout(() => {
          dispatch(setUser({...data.user}))
          dispatch(loginSuccess({
            accessToken: data.accessToken,
            isAuthenticated: true,
            refreshToken: '',
            loading: false,
            error: ''
          }))
          navigate('/')
        }, 2000)
      }).catch((err: AxiosError) => {

        const data = err.response?.data as any
        toast.error(data.message as unknown as string);
      })
    },
  })
  return (
    <div className='grid md:grid-cols-2'>
      <div className='hidden md:flex justify-center items-center'>
        <img src="/bg-home.svg" alt="" className='h-full w-full object-cover' />
      </div>
      <div className='h-screen bg-blue-700 p-10 flex flex-col gap-6 justify-center items-center'>
        <form action="" onSubmit={formik.handleSubmit} className='flex flex-col gap-5 w-full'>
          {
            loginFields.map((field) => (
              <div className='flex flex-col w-full' key={field.name}>
                <label htmlFor={field.name} className='text-white font-bold text-xl'>{field.label}</label>
                <input {...field} value={formik.values[field.name]} onChange={formik.handleChange} onBlur={formik.handleBlur} className="focus:right-0 border rounded-sm" />
                {formik.errors[field.name] ?
                  <div className={'text-red-500'}>{
                    (formik.errors as unknown as any)[field.name]
                  }</div> :
                  <React.Fragment></React.Fragment>
                }
              </div>
            ))
          }
          <ToastContainer

            autoClose={5000}
            pauseOnHover
            position={"top-right"}
          />
          <div>
            <button className='px-16 bg-orange-600 text-lg font-bold py-3 rounded-3xl text-white' type='submit' >Login</button>
          </div>
        </form>
        <div>
          <p className='text-xl text-white'>Don't have an account? <button className='text-blue-200' onClick={e => {
            setPage("register")
          }}>Create free account</button></p>
        </div>
      </div>
    </div>
  )
}

export default HomeLogin
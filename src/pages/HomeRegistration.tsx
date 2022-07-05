import { registerForm } from 'data/accountForms'
import { HomepageTypes } from 'helpers/HomeSwitcher'
import { useFormik } from "formik";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { AxiosError } from "axios";
import { baseAxios } from "../api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const validate = (values: RegistrationDataStateType) => {
    const errors: { [x: string]: any } = {};

    if (!values.username) {
        errors.lastName = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    //Password required
    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 8) {
        errors.password = "Password should be more than 8 characters"
    }
    //Password match
    if (!(values.password === values.confirmPassword)) {
        errors.confirmPassword = "Passwords do not match"
    }

    return errors;
};

type HomeRegisterPageType = {
    page: HomepageTypes['page'],
    setPage: HomepageTypes['setPage']
}

type RegistrationDataStateType = {
    [x: string | symbol]: any
    email: string
    username: string
    password: string
    confirmPassword: string
}
const HomeRegistration = ({ setPage }: HomeRegisterPageType) => {
    const initialValues: RegistrationDataStateType = {
        password: '',
        confirmPassword: '',
        username: '',
        email: '',

    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            baseAxios.post('/users/new', values, {}).then(async (res) => res.data).then((data) => {
                toast.success('Account created successfully')
                setTimeout(() => {
                    setPage('login')
                }, 2000)
            }).catch((err: AxiosError) => {
                const data = err.response?.data as any
                toast.error(data.message as unknown as string);
            })
        },
    })
    const [showPassword, setShowPassword] = React.useState<boolean>(false)

    return (

        <div className='grid md:grid-cols-2'>

            <div
                className='hidden md:flex justify-center items-center'>
                <img src="/bg-home.svg"
                    alt=""
                    className='h-full w-full object-cover' />
            </div>
            <div className='h-screen bg-blue-700 p-10 flex flex-col gap-6 justify-center items-center'>
                <form action=""
                    className='flex flex-col gap-5 w-full'
                    onSubmit={formik.handleSubmit}
                >
                    {
                        registerForm.map((field) => (
                            (field.name === 'password' || field.name === 'confirmPassword') ? <div className='flex flex-col w-full' key={field.name}>
                                <label htmlFor={field.name} className='text-white font-bold text-xl'>{field.label}</label>
                                <div className='flex bg-white items-center'>
                                    <input {...field} value={formik.values[field.name]} type={showPassword ? 'text' : 'password'} onChange={formik.handleChange} onBlur={formik.handleBlur} className="focus:ring-0 border-none outline-none rounded-sm w-full" />
                                    <span onClick={e => {
                                        e.preventDefault()
                                        setShowPassword(!showPassword)

                                    }}
                                        className="px-2 cursor-pointer"
                                    >
                                        {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                    </span>
                                </div>
                                {formik.errors[field.name] ?
                                    <div className={'text-red-500'}>{
                                        (formik.errors as unknown as any)[field.name]
                                    }</div> :
                                    <React.Fragment></React.Fragment>
                                }
                            </div> : <div className='flex flex-col w-full' key={field.name}>
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
                        <button
                            className='px-16 bg-orange-600 text-xg font-bold py-3 rounded-3xl text-white'
                            type={"submit"}>Create free account
                        </button>
                    </div>
                </form>
                <div>
                    <p
                        className='text-center text-xl text-white'
                    >Already have an account? <button
                        className='text-blue-200' onClick={e => {
                            setPage("login")
                        }}>Sign in </button></p>
                </div>
            </div>
        </div>
    )
}

export default HomeRegistration
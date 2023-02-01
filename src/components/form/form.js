import React, {useState} from 'react';
import {useQuery} from "react-query";
import './form.css'

import {loginUser} from "../../services/service";
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";

const Form = ({isLoggedIn, onLogin}) => {
    // hook-form
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: '',
            password: ''
        }
    })
    // hook-form


    // if (isLoggedIn) {
    //     if (isLoggedIn) {
    //         return <Navigate to={'/'}/>
    //     }
    // }



    const onSubmitForm = async (data) => {
        const user = await loginUser(data.email, data.password)
        console.log(user)

        if (user){
            onLogin()
        }


    }


    return (
        <div className='container'>
            <form className='form' action="" onSubmit={handleSubmit(onSubmitForm)}>
                <p>test@gmail.com</p>
                <label htmlFor=""> <span>Email</span>
                    <input {...register('email', {
                        required: 'Поле обязательно к заполнению',
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    })}/>
                </label>
                <div>{errors?.email && <p>{errors?.email?.message}</p>}</div>

                <label htmlFor=""><span>Password</span>
                    <input
                        type={"password"}
                        {...register('password', {
                            required: 'Поле обязательно к заполнению',
                            minLength: {
                                value: 4,
                                massage: 'минимум 5 символов'
                            }
                        })}/>
                </label>
                <input type='submit' disabled={!isValid}></input>
            </form>

        </div>
    );
};

export default Form;
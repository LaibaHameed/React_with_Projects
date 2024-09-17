// react hook from 
import React from 'react'
import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const delayFun = (d) => {
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                resolve();
            }, d*1000)
        })
    }
    const onSubmit = async (data) => {
        await delayFun(4);
        console.log(data);
        if(data !== 'Laiba'){
            setError("myform", {message: "invalid user"});
        }
    }

    return (
        <div>
        {isSubmitting && <div>Loading....</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='username' defaultValue="test" type='text' {...register("username",{
                    required: { value: true, message: "This field is required" },
                    minLength: {value: 3, message: "min length is 3"},
                    maxLength: {value: 8, message: "max length is 8"},
                })} />
                {errors.username && <div>{errors.username.message}</div>}
                <br/>
                <input placeholder='password' type='password' {...register("password", { 
                    required: { value: true, message: "This field is required" } 
                })} />
                {errors.password && <span>{errors.password.message}</span>}
                <br/>
                <input disabled={isSubmitting} type="submit" />
                <br/>
                {errors.myform && <span>{errors.myform.message}</span>}
            </form>
        </div>
    )
}

export default Form
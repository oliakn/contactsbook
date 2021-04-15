import React from 'react';
import {useForm} from "react-hook-form";

const AddForm = ({addUser, setIsShowForm}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = data => {
        addUser(data)
        reset()
    }


    return (
        <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
            <input type="text"
                   className='border-2 w-full mb-3 px-2 py-1 rounded focus
                   focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                   placeholder='enter your name'
                   {...register("name", {required: true, pattern: /[A-Za-z]{3}/})}
            />
            {errors.name && <span className='text-pink-600'>*enter your name</span>}
            <input type="text"
                   className='border-2 w-full mb-3 px-2  py-1 rounded focus focus:border-indigo-600
                   focus:outline-none active:outline-none active:border-indigo-600'
                   placeholder='enter your phone'
                   {...register("phone", {required: true})}
            />
            {errors.phone && <span className='text-pink-600'>*enter your phone</span>}
            <div className="text-right">
                <button
                    className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-indigo-500 uppercase
                     transition bg-transparent border-2 border-indigo-500 rounded ripple hover:bg-indigo-100 focus:outline-none mr-3"
                    onClick={() => {
                        setIsShowForm(false)
                    }}
                >cancel
                </button>
                <button
                    className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition
                    border-2 border-indigo-500 bg-indigo-500 rounded shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none"
                >add
                </button>
            </div>
        </form>
    );
};

export default AddForm;
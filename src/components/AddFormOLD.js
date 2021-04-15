import React, {useState} from 'react';

const AddFormOLD = ({addUser}) => {
   const [user,setUser] = useState({name: '', phone: ''})
    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.name.length < 3){
            setNameError('* need minimum 3 symbols')
        } else {
            setNameError('')
        }
        if (user.phone.length === 0) {
            setPhoneError('*  put your number')
        } else {
            setPhoneError('')
        }
        if (user.name.length >= 3 && user.phone.length !== 0) {
            addUser(user)
            setUser({name: '', phone: ''})
        }
    }

    const handleChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    return (
        <form className='p-4'>
            <input type="text"
                   className='border-2 w-full mb-3 px-2 py-1 rounded focus
                   focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                   placeholder='enter your name'
                   name='name'
                   onChange={handleChange}
                   value={user.name}
            />
            {nameError && <span className='text-pink-600'>{nameError}</span>}
            <input type="text"
                   className='border-2 w-full mb-3 px-2  py-1 rounded focus focus:border-indigo-600
                   focus:outline-none active:outline-none active:border-indigo-600'
                   placeholder='enter your phone'
                   name='phone'
                   onChange={handleChange}
                   value={user.phone}
            />
            {phoneError && <span className='text-pink-600'>{phoneError}</span>}
            <div className="text-right">
                <button
                    className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-indigo-500 uppercase
                     transition bg-transparent border-2 border-indigo-500 rounded ripple hover:bg-indigo-100 focus:outline-none mr-3"
                >cancel
                </button>
                <button
                    className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition
                    border-2 border-indigo-500 bg-indigo-500 rounded shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none"
                    onClick={handleSubmit}
                >add
                </button>
            </div>
        </form>
    );
};

export default AddFormOLD;
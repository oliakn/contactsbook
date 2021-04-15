import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

const ContactListItem = ({user, onDelete, updateContacts}) => {
    const [updatedName, setUpdatedName] = useState(user.name)
    const [updatedPhone, setUpdatedPhone] = useState(user.phone)
    const [editable, setEditable] = useState(false)
    const handleSave = (id) => {
        updateContacts(updatedName, updatedPhone, id)
        setEditable(false)
    }
    const initials = user.name.split(' ').map(rec => rec[0]).join('')
    return (
        <div className='flex items-center p-4 hover:bg-gray-100 '>
            <div
                className='rounded-full bg-indigo-600 text-white font-bold p-4 w-16 h-16 flex justify-center items-center mr-5'>
                {initials}
            </div>
            <div>
                {
                    editable ? (
                        <>
                            <input className='border-2 w-4/5 mb-3 px-2 py-1 rounded focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                                   type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)}/>
                            <input className='border-2 w-4/5 mb-3 px-2 py-1 rounded focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600'
                                   type="text" value={updatedPhone} onChange={(e) => setUpdatedPhone(e.target.value)}/>
                            <div>
                                <button
                                    className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded ripple hover:bg-indigo-100 focus:outline-none mr-3"
                                    onClick={() => {
                                        setEditable(false)
                                    }}
                                >cancel
                                </button>
                                <button className='className="inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-indigo-500 uppercase transition bg-transparent border-2 border-indigo-500 rounded ripple hover:bg-indigo-100 focus:outline-none mr-3"'
                                    onClick={() => editable ? handleSave(user.id) : setEditable(true)}>Save</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h4 className='font-bold text-xl'>{user.name}</h4>
                            <p className='text-gray-500	'>{user.phone}</p>
                        </>
                    )
                }
            </div>
            <div className='ml-auto flex'>
                <div
                    onClick={() => setEditable(true)}
                    className="w-4 mr-2 text-indigo-600 transform hover:text-black hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                    </svg>
                </div>
                <FontAwesomeIcon icon={faTimes}
                                 className='text-indigo-600 transform hover:text-black hover:scale-110'
                                 onClick={() => onDelete(user.id)}
                />
            </div>
        </div>
    );
};

export default ContactListItem;
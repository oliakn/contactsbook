import React from 'react';

const Header = ({setSearch,setIsShowForm}) => {
    return (
        <div className='bg-indigo-600 p-4 rounded-t-md'>
            <div className="flex justify-between mb-4">
                <h2 className='font-bold text-2xl text-white'>Contacts Book</h2>
                <span className='font-bold text-2xl text-white' onClick={setIsShowForm}>+</span>
            </div>
            <input type="text"
                   onChange={(e) => setSearch(e.target.value)}
                   className='w-full px-2 py-1 rounded focus-within:border-indigo-500 focus:outline-none'
                   placeholder='search...'
            />
        </div>
    );
};

export default Header;
import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import axios from "axios";
import AddForm from "./components/AddForm";

const App = () => {
    const [search, setSearch] = useState('')
    const [isShowForm, setIsShowForm] = useState(false)
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios('https://605c24c46d85de00170d9532.mockapi.io/users')
            .then(rec => {
                setContacts(rec.data)
            })
    }, [])

    const deleteUser = (id) => {
        axios.delete(`https://605c24c46d85de00170d9532.mockapi.io/users/${id}`)
            .then(({data}) => {
                setContacts(contacts.filter(rec => rec.id !== data.id))
            })
    }

    const addUser = (user) => {
        axios.post('https://605c24c46d85de00170d9532.mockapi.io/users', user)
            .then(({data}) => setContacts([...contacts, data]))
    }

    const updateContacts = (updatedName, updatedPhone, id) => {
        const updatedContacts = contacts.map(el => el.id === id ? {...el, name: updatedName, phone: updatedPhone} : el)
        setContacts(updatedContacts)
        console.log(updatedName)
    }

    return (
        <div className='w-1/3 mx-auto my-6 shadow rounded-md'>
            <Header setSearch={setSearch} setIsShowForm={setIsShowForm}/>
            {isShowForm && <AddForm addUser={addUser} setIsShowForm={setIsShowForm}/>}
            <ContactsList updateContacts={updateContacts} search={search} contacts={contacts} onDelete={deleteUser}/>
        </div>
    );
};

export default App;

import React from 'react';
import ContactListItem from "./ContactListItem";

const ContactsList = ({search, contacts,onDelete, updateContacts}) => {
    const filteredSearch = contacts.filter(rec => rec.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className='overflow-y-scroll contactlist'>
            {filteredSearch.map(user => <ContactListItem updateContacts={updateContacts} user={user} onDelete={onDelete} key={user.id}/>
            )}
        </div>
    );
};

export default ContactsList;
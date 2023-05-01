import React from 'react';
import css from 'components/ContactsList/ContactsList.module.css';

export function ContactsList({contacts, deleteContact}) {
  
    return (
    <ul className={css.contactsList}>
        {contacts.map(contact => {
            return (
                <li key={contact.id} className={css.contactsItem}>
                    <div>
                    <span className={css.contactsItemName}>{contact.name}</span>:
                    <span className={css.contactsItemNumber}> {contact.number}</span>
                    </div>
                    <button className={css.contactsItemButton} onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}
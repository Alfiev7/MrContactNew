import { ContactPreview } from './ContactPreview.jsx'

export function ContactList({ contacts, onRemoveContact, onEditContact, addToContact }) {
  return (
    <ul className='contact-list'>
      {contacts.map(contact => (
        <li className='contact-preview' key={contact._id}>
          <ContactPreview contact={contact} />
          <div>
            <button onClick={() => onRemoveContact(contact._id)}>x</button>
            <button onClick={() => onEditContact(contact)}>Edit</button>
          </div>
          <button className='buy' onClick={() => addToContact(contact)}>
            Add to Contact
          </button>
        </li>
      ))}
    </ul>
  )
}

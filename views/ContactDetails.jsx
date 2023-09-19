import { contactService } from "../services/contact.service.js"
const { useParams, useNavigate, Link } = ReactRouterDOM
const { useEffect, useState } = React
import { removeContact } from "../store/actions/contact.actions.js"

export function ContactDetails() {
    const [contact, setContact] = useState(null)
    const { contactId } = useParams()
    const navigate = useNavigate()


    useEffect(() => [
        loadContact()
    ], [contactId])


    function loadContact() {
        contactService.getById(contactId)
            .then((contact) => setContact(contact))
            .catch((err) => {
                console.log('Can not find and load contact')
            })
    }


    function onDeleteContact() {
        removeContact(contactId)
        .then(() => {
            console.log('Contact removed')
        })
        .catch(err => {
            console.log('Can not delete contact', err)
        })
    }



    return (
        <section className="contact-details">
            <h1>Name : `{contact.firstName} {contact.lastName}</h1>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={onDeleteContact}>Logout</button>
            <Link to= "/contact/:contactid/edit">Edit</Link>

        </section>
    )
}




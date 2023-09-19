import { contactService } from "../services/contact.service"
const { useParams } = ReactRouterDOM
const { useEffect, useState } = React

export function ContactDetails() {
    const [contact, setContact] = useState(null)
    const { contactId } = useParams()


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


    return (
        <section className="contact-details">
            <h1>Name : `{contact.firstName} {contact.lastName}</h1>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
        </section>
    )
}




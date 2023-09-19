const { useState, useEffect } = React
const { useSelector, useDispatch } = ReactRedux

import { contactservice } from '../services/contact.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadContacts, removeContact, removeContactOptimistic, saveContact } from '../store/actions/contact.actions.js'
import { ADD_CONTACT_TO_CONTACTT, SET_FILTER_BY } from '../store/reducers/contact.reducer.js'

export function ContactIndex() {
  const dispatch = useDispatch()
  const contacts = useSelector(storeState => storeState.contactModule.contacts)
  //   const filterBy = useSelector(storeState => storeState.contactModule.filterBy)
  //   const isLoading = useSelector(storeState => storeState.contactModule.isLoading)

  useEffect(() => {
    loadContacts().catch(err => {
      console.log('err:', err)
      showErrorMsg('Cannot load contacts')
    })
  }, [filterBy])

  function onRemoveContact(contactId) {
    // removeContactOptimistic(contactId)
    removeContact(contactId)
      .then(() => {
        showSuccessMsg('Contact removed')
      })
      .catch(err => {
        console.log('Cannot remove contact', err)
        showErrorMsg('Cannot remove contact')
      })
  }

  function onAddContact() {
    const contactToSave = contactservice.getEmptyContact()
    saveContact(contactToSave)
      .then(savedContact => {
        showSuccessMsg(`Contact added (id: ${savedContact._id})`)
      })
      .catch(err => {
        console.log('Cannot add contact', err)
        showErrorMsg('Cannot add contact')
      })
  }

  function onEditContact(contact) {
    const price = +prompt('New price?', contact.price)
    const contactToSave = { ...contact, price }
    saveContact(contactToSave)
      .then(savedContact => {
        showSuccessMsg(`Contact updated to price: $${savedContact.price}`)
      })
      .catch(err => {
        console.log('Cannot update contact', err)
        showErrorMsg('Cannot update contact')
      })
  }

  function addToContact(contact) {
    console.log(`Adding ${contact.vendor} to Contact`)
    dispatch({ type: ADD_CONTACT_TO_CONTACTT, contact })
    showSuccessMsg('Added to Contact')
  }

  function onSetFilter(filterBy) {
    dispatch({ type: SET_FILTER_BY, filterBy })
  }

  return (
    <div>
      <h3>Contacts App</h3>
      <main>
        <button onClick={onAddContact}>Add Contact ⛐</button>
        <ContactFilter filterBy={filterBy} onSetFilter={onSetFilter} />

        {!isLoading && (
          <ContactList
            contacts={contacts}
            onRemoveContact={onRemoveContact}
            onEditContact={onEditContact}
            addToContact={addToContact}
          />
        )}

        {isLoading && <div>Loading...</div>}
        <hr />
        {/* <pre>{JSON.stringify(contactt, null, 2)}</pre> */}
      </main>
    </div>
  )
}

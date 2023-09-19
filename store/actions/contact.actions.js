import { contactService } from '../../services/contact.service.js'
import { ADD_CONTACT, CONTACT_UNDO, REMOVE_CONTACT, SET_CONTACTS, UPDATE_CONTACT } from '../reducers/contact.reducer.js'
import { store } from '../store.js'

export function loadContacts() {
  //   const { filterBy } = store.getState().contactModule
  const filterBy = ''

  return contactService
    .query(filterBy)
    .then(contacts => {
      store.dispatch({ type: SET_CONTACTS, contacts })
    })
    .catch(err => {
      console.log('contact action -> Cannot load contacts', err)
      throw err
    })
}

export function removeContact(contactId) {
  return contactService
    .remove(contactId)
    .then(() => {
      store.dispatch({ type: REMOVE_CONTACT, contactId })
    })
    .catch(err => {
      console.log('contact action -> Cannot remove contact', err)
      throw err
    })
}

export function removeContactOptimistic(contactId) {
  store.dispatch({ type: REMOVE_CONTACT, contactId })
  return contactService.remove(contactId).catch(err => {
    store.dispatch({ type: CONTACT_UNDO })
    console.log('contact action -> Cannot remove contact', err)
    throw err
  })
}

export function saveContact(contact) {
  const type = contact._id ? UPDATE_CONTACT : ADD_CONTACT
  return contactService
    .save(contact)
    .then(contactToSave => {
      store.dispatch({ type, contact: contactToSave })
      return contactToSave
    })
    .catch(err => {
      console.log('contact action -> Cannot save contact', err)
      throw err
    })
}

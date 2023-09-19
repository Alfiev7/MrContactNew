import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'contactDB'

export const contactService = {
  query,
  getById,
  save,
  remove,
  getEmptyContact,
  getDefaultFilter,
}

function query(filterBy = {}) {
  //   if (!filterBy.txt) filterBy.txt = ''
  //   if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
  //   const regExp = new RegExp(filterBy.txt, 'i')

  //   return storageService.query(STORAGE_KEY).then(contacts => {
  //     return contacts.filter(contact => regExp.test(contact.firstName) && contact.price <= filterBy.maxPrice)
  //   })
  return storageService.query(STORAGE_KEY).then(contacts => contacts)
}

function getById(contactId) {
  return storageService.get(STORAGE_KEY, contactId)
}
function remove(contactId) {
  return storageService.remove(STORAGE_KEY, contactId)
}
function save(contact) {
  if (contact._id) {
    return storageService.put(STORAGE_KEY, contact)
  } else {
    return storageService.post(STORAGE_KEY, contact)
  }
}

function getEmptyContact() {
  return {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    desc: false,
  }
}

function getDefaultFilter() {
  return { firstName: '', lastName: '' }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))

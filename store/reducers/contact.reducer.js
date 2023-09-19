import { contactService } from "../../services/contact.service.js"

export const SET_CONTACTS = 'SET_CONTACTS'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'


export const SET_CONTACT_IS_SHOWN = 'SET_CONTACT_IS_SHOWN'



export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_IS_LOADING = 'SET_IS_LOADING'

export const CONTACT_UNDO = 'CONTACT_UNDO'


const initialState = {
    contacts: [],

}

export function contactReducer(state = initialState, action = {}) {
    let contacts
    let lastContacts

  
    switch (action.type) {
        // Contacts
        case SET_CONTACTS:
            lastContacts = [...action.contacts]
            return { ...state, contacts: action.contacts, lastContacts }

        case REMOVE_CONTACT:
            lastContacts = [...state.contacts]
            contacts = state.contacts.filter(contact => contact._id !== action.contactId)
            return { ...state, contacts, lastContacts }

        case ADD_CONTACT:
            contacts = [...state.contacts, action.contact]
            return { ...state, contacts }

        case UPDATE_CONTACT:
            contacts = state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            return { ...state, contacts }

        case CONTACT_UNDO:
            contacts = [...state.lastContacts]
            return { ...state, contacts }

    }
}
//         // Shopping Contact
//         case SET_CONTACT_IS_SHOWN:
//             return { ...state, isContactShown: action.isContactShown }

//         case ADD_CONTACT_TO_CONTACT:
//             shoppingContact = [...state.shoppingContact, action.contact]
//             return { ...state, shoppingContact }

//         case REMOVE_CONTACT_FROM_CONTACT:
//             shoppingContact = state.shoppingContact.filter(contact => contact._id !== action.contactId)
//             return { ...state, shoppingContact }

//         case CLEAR_CONTACT:
//             return { ...state, shoppingContact: [] }

//         case SET_FILTER_BY:
//             return { ...state, filterBy: {...action.filterBy} }

//         case SET_IS_LOADING:
//             return { ...state, isLoading: action.isLoading }

//         default:
//             return state;
//     }
// }
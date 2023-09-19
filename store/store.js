

const { createStore, compose } = Redux


const rootReducer = combineReducers({
    contactModule: contactReducer,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(rootReducer, composeEnhancers())

// console.log('store.getState():', store.getState())
window.gStore = store


// store.subscribe(() => {
//     console.log('Current state is:', store.getState())
// })




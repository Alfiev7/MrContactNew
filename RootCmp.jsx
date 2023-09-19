const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/AppHeader.jsx'
import { About } from './views/About.jsx'

import { ContactDetails } from './views/ContactDetails.jsx'
import { ContactIndex } from './views/ContactIndex.jsx'

import { Home } from './views/Home.jsx'

export function App() {

    return (
        <Router>
            <section className='app'>
                <AppHeader />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<ContactIndex />} />
                    <Route path="/contact/:contactid" element={<ContactDetails />} />
                    <Route path="/contact/:contactid/edit" element={<ContactEdit />} />
                </Routes>
            </section>
        </Router>
    )

}

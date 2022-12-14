import React from 'react'
import Header from './header';
import Main from './main';
import NoTransitionExample from './carcoual';
import Footer from './footer';
export default function FileIndex() {
    return (
        <div>
            <Header />
            <NoTransitionExample />
            <Main />
            <Footer />
        </div>
    )
}

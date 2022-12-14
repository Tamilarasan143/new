import React from 'react'
import Header from '../components/header';
import Main from '../components/main';
import NoTransitionExample from '../components/carcoual';
import Footer from '../components/footer';
export default function FileIndex() {
  return (
    <div>
        <Header />
        <Main />
        <NoTransitionExample />
        <Footer />
    </div>
  )
}

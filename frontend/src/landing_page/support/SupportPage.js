import React from 'react';

import Hero from './Hero';
import CreateTickets from './CreateTicket';

import Navbar from '../Navbar';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <CreateTickets />
            <Footer />
        </>
     );
}

export default SupportPage;
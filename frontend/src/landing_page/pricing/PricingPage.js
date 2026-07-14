import React from 'react';
import Navbar from '../Navbar';
import Pricing from './Pricing';
import Brokerage from './Brokerage';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <> 
            <Navbar />
            <Pricing />
            <Brokerage />
            <Footer />
        </>
     );
}

export default PricingPage;
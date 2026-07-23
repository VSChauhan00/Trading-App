import React from 'react';
import Pricing from './Pricing';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <> 
            <Pricing />
            <OpenAccount />
            <hr />
            <Brokerage />
        </>
     );
}

export default PricingPage;
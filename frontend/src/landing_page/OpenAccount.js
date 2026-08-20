import React from 'react';
import {Link} from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center mb-5'>
                <h1 className='m-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link class="nav-link active" aria-current="page" to="/signup"><button type="button" class="p-2 btn btn-primary fs-5 mt-2" style={{width:"20%", margin: "0 auto"}}>Signup for free</button></Link>
            </div>
        </div>
     );
}

export default OpenAccount;
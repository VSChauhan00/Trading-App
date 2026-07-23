import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row text-center my-5'>
                <h1>Pricing</h1>
                <p className='text-muted fs-4'>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <hr/>
            <div className='row text-center my-5 p-5'>
                <div className='col text-center'>
                    <img src='media/images/pricing0.svg' style={{width:'240px'}}/><br /><br />
                    <h2>Free equity delivery</h2><br />
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col text-center'>
                    <img src='media/images/intradayTrades.svg' style={{width:'240px'}}/><br /><br />
                    <h2>Intraday and F&O trades</h2><br />
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed <br />order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                </div>
                <div className='col text-center'>
                    <img src='media/images/pricingMF.svg' style={{width:'240px'}}/><br /><br />
                    <h2>Free direct MF</h2><br />
                    <p className='text-muted'>All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
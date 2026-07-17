import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted mb-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:'none'}}>
                        See pricing
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src='media/images/pricing0.svg'/>
                        </div>
                        <div className='col-2'>
                            <p>Free account <br/>opening</p>
                        </div>
                        <div className='col-2'>
                            <img src='media/images/pricing0.svg'/>
                        </div>
                        <div className='col-2'>
                            <p>Free equity delivery <br/>and direct mutual funds</p>
                        </div>
                        <div className='col-2'>
                            <img src='media/images/intradayTrades.svg'/>
                        </div>
                        <div className='col-2'>
                            <p>Intraday and F&O</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
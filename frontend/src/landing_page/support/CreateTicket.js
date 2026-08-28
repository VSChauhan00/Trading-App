import React from 'react';

function CreateTickets() {
    return (
        <div className='container'>
            <div className='row mb-5 p-5' style={{ lineHeight: '2.5' }}>
                <h2 className='text-muted mb-5 fs-2 pb-5'>To create ticket, select a relevant topic</h2>
                <div className='col-4'>
                    <h5 className='mb-4'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Openieng</h5>
                    <a href=''>Online Account Opening</a><br />
                    <a href=''>Offline Account Opening</a><br />
                    <a href=''>Company, Partnership and HUF Account Opening</a><br />
                    <a href=''>NRI Account Opening</a><br />
                    <a href=''>Charges at Tradinx</a><br />
                    <a href=''>Tradinx IDFC First Bank 3-in-1 Account</a><br />
                    <a href=''>Getting Started</a><br />
                </div>
                <div className='col-4'>
                    <h5 className='mb-4'><i class="fa fa-user" aria-hidden="true"></i>  Your Tradinx Account</h5>
                    <a href=''>Login Credentials</a><br />
                    <a href=''>Account Modification and Segment Addition</a><br />
                    <a href=''>DP ID and bank details</a><br />
                    <a href=''>Your Profile</a><br />
                    <a href=''>Transfer and conversion of shares</a><br />
                </div>
                <div className='col-4'>
                    <h5 className='mb-4'><i class="fa fa-bar-chart" aria-hidden="true"></i> Kite</h5>
                    <a href=''>Matgin/leverage, Products and Order types</a><br />
                    <a href=''>Kite Web and Mobile</a><br />
                    <a href=''>Trading FAQs</a><br />
                    <a href=''>Corporate Actions</a><br />
                    <a href=''>Sentinel</a><br />
                    <a href=''>Kite API</a><br />
                    <a href=''>Pi and Other platforms</a><br />
                    <a href=''>Stockreports+</a><br />
                    <a href=''>GTT</a><br />
                </div>
            </div>
            <div className='row text-muted my-5' style={{ lineHeight: '2.5' }}>
                <div className='col-4 mb-5'>
                    <h5 className='mb-4'><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</h5>
                    <a href=''>Adding Funds</a><br />
                    <a href=''>Fund Withdrawl</a><br />
                    <a href=''>e-Mandates</a><br />
                    <a href=''>Adding Bank Accounts</a><br />
                </div>
                <div className='col-4 mb-5'>
                    <h5 className='mb-4'><i class="fa fa-circle-o-notch" aria-hidden="true"></i>  Console</h5>
                    <a href=''>Reports</a><br />
                    <a href=''>Ledger</a><br />
                    <a href=''>Portfolio</a><br />
                    <a href=''>60 Day Challenge</a><br />
                    <a href=''>IPO</a><br />
                    <a href=''>Referral Program</a><br />
                </div>
                <div className='col-4 mb-5'>
                    <h5 className='mb-4'><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</h5>
                    <a href=''>Understanding Mutual Funds</a><br />
                    <a href=''>About Coin</a><br />
                    <a href=''>Buying and Selling through Coin</a><br />
                    <a href=''>Starting an SIP</a><br />
                    <a href=''>Managing your Portfolio</a><br />
                    <a href=''>Coin App</a><br />
                    <a href=''>Moving to Coin</a><br />
                    <a href=''>Government Securities</a><br />
                </div>
            </div>
        </div>
    );
}

export default CreateTickets;
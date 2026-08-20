import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='' className=' fs-5'>Track Tickets</a>
            </div>
            <div className='row p-5 m-5'>
            <div className='col p-5 mx-5'>
                <h2 className='fs-3'>Search for an answer or browse help topics to create a ticket</h2>
                <input placeholder='Eg. how do I activate F&O, why is my order getting rejected..' className='mb-3'/><br />
                <a href=''>Track account opening</a>
                <a href=''>Track segment activation</a>
                <a href=''>Intraday margins</a>
                <a href=''>Kite user manual</a>
            </div>
            <div className='col p-5'>
                <h2 className='fs-3 mx-3'>Featrued</h2>
                <ol>
                    <li><a href=''>Current Takeovers and Delisting</a></li>
                    <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
            </div>
        </section>
    );
}

export default Hero;
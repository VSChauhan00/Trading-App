import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mb-5 p-5'>
                <h2 className='text-muted'>Trading simplified. Markets amplified.</h2>
            </div>
            <hr />
            <div className='row text-muted my-4 pt-4'>
                <div className='col'>
                    <h4>Trading, built on clarity</h4>
                    <p>Zerodha gives you direct access to global stock and forex markets, with the tools, pricing, and infrastructure to trade with confidence.</p>

                    <p>We built this platform because we were tired of choosing between powerful and usable. Most trading tools force that trade-off — either buried in complexity built for institutions, or stripped down to the point of being unreliable. We wanted neither. So we built a platform that gives serious traders real depth, without making them fight the interface to get it.</p>
                </div>
                <div className='col'>
                    <h4>What we offer</h4>
                    <p>Stocks. Trade shares across major global exchanges with real-time pricing and transparent execution.</p>
                    <p>Forex. Access major, minor, and exotic currency pairs with competitive spreads and fast order execution.</p>
                    <p>Tools that matter. Live charting, order types built for real strategies, and a dashboard that shows you what you need — not what looks impressive in a demo.</p>
                </div>
            </div>
            <div className='row text-muted mb-4'>
                <div className='col'>
                    <h4>How we think about trading</h4>
                    <p>Markets reward preparation, not noise. We don't gamify trading with streaks, badges, or push notifications designed to get you to trade more. Our job is to give you accurate data, reliable execution, and get out of your way.</p>
                    <p> We also believe trading involves real risk, and we're upfront about that. Our platform is built for people who understand markets move in both directions and want a partner that gives them the tools to manage that, not one that pretends the risk isn't there.</p>
                </div>
                <div className='col'>
                    <h4>Security & trust</h4>
                    <p>Your capital and your data are protected with bank-level 256-bit encryption or regulated by SEBI. We hold client funds separately from operating funds, and we're transparent about our fees — no hidden costs, no surprises on your statement.</p>
                </div>
            </div>
            <div className='row text-muted mb-4'>
                <div className='col'>
                    <h4>Who we're building for</h4>
                    <p>Whether you're managing a long-term portfolio or trading active positions day to day, Zerodha is built to scale with you — from your first trade to your five-hundredth.</p>
                </div>
                <div className='col'>
                    <h4>Get started</h4>
                    <p>Markets are open. <Link to='/signup' style={{color:"blue"}}>Create an account</Link> and start trading in minutes.</p>
                </div>
            </div>
            <hr />
        </div>
     );
}

export default Hero;
import React from 'react';

function Team() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h3>People</h3>
            </div>
            <div className='row mt-5 text-center text-muted'>
                <div className='col'>
                    <img src='media/images/devloper.jpg' alt='V.S.CHAUHAN' style={{width:'210px', borderRadius:'100%'}}/>
                    <h5 className='mt-4'>Vivek Singh Chauhan</h5>
                    <p>Developer of this project</p>
                </div>
                <div className='col mt-5'>
                    <p>Tradinx is a project built by Vivek, a self-taught engineer. It started as a way to understand how real trading platforms work under the hood, and has grown from there.</p>

                    <p>This is a solo build, developed as part of my portfolio— feedback and suggestions are always welcome at <i style={{color:'blue'}}>xyz@gmail.com</i>.</p>

                    <p>Connect on <a href='#' style={{color:'blue'}}>Homepage</a> <a href='#' style={{color:'blue'}}>TradingQ&A</a> <a href='#' style={{color:'blue'}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;
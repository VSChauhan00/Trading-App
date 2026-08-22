import React from 'react';
import {Link} from "react-router-dom";

function Universe() {
    return (
        <div className='container text-center p-5'>
            <div className='row text-center text-muted mt-5 pt-5'>
                <h1 className='fs-3'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center text-muted mt-5' style={{ fontSize: '12px' }}>
                <div className='col-4 text-center text-muted mt-3'>
                    <a href=''>
                        <img src='media/images/zerodhaFundhouse.png' className='p-2' style={{ width: '210px', marginBottom: '12px' }} />
                        <p>Our asset management venture<br />
                            that is creating simple and transparent index<br />
                            funds to help you save for your goals.
                        </p>
                    </a>
                </div>
                <div className='col-4 text-center text-muted mt-3'>
                    <a href=''>
                        <img src='media/images/sensibullLogo.svg' className='p-2' style={{ width: '210px', marginBottom: '29px' }} />
                        <p>Options trading platform that lets you<br />
                            create strategies, analyze positions, and examine<br />
                            data points like open interest, FII/DII, and more.
                        </p>
                    </a>
                </div>
                <div className='col-4 text-center text-muted'>
                    <a href=''>
                        <img src='media/images/tijori.svg' style={{ width: '210px', marginBottom: '15px' }} />
                        <p>Investment research platform<br />
                            that offers detailed insights on stocks,<br />
                            sectors, supply chains, and more.
                        </p>
                    </a>
                </div>
            </div>
            <div className='row text-center text-muted my-5' style={{ fontSize: '12px' }}>
                <div className='col-4 text-center text-muted'>
                    <a href=''>
                        <img src='media/images/streakLogo.png' className='p-2' style={{ width: '210px', marginBottom: '12px' }} />
                        <p>Systematic trading platform<br />
                            that allows you to create and backtest<br />
                            strategies without coding.
                        </p>
                    </a>
                </div>
                <div className='col-4 text-center text-muted mt-3'>
                    <a href=''>
                        <img src='media/images/smallcaseLogo.png' style={{ width: '210px', marginBottom: '20px' }} />
                        <p>Thematic investing platform<br />
                            that helps you invest in diversified<br />
                            baskets of stocks on ETFs.
                        </p>
                    </a>
                </div>
                <div className='col-4 text-center text-muted'>
                    <a href=''>
                        <img src='media/images/dittoLogo.png' style={{ width: '200px', marginBottom: '12px' }} />
                        <p>Personalized advice on life<br />
                            and health insurance. No spam<br />
                            and no mis-selling.
                        </p>
                    </a>
                </div>
            </div>
            <Link class="nav-link active" aria-current="page" to="/signup"><button type="button" class="p-2 btn btn-primary fs-5 mt-2" style={{ width: "20%", margin: "0 auto" }}>Signup for free</button></Link>
        </div>
    );
}

export default Universe;
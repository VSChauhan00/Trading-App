import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-5 mt-4 p-4 text-center'>
                    <img src={imageURL} />
                </div>
                <div className='col-2'></div>
                <div className='col-5 mt-5 p-5 text-muted'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo →</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' /></a>

                        <a href={appStore}><img src='media/images/appStoreBadge.svg' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
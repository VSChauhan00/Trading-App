import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col m-5 p-5 text-muted'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore}>Learn More →</a>
                </div>
                <div className='col ml-5 text-center'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
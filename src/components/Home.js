import React from 'react';
import phoneImg from '../Images/phone.jpg';
import cart from '../Images/cart.png';

function Home(){
    return(
        <div>
            <div className='cart-wrapper item'>
                <img src= {cart} />
            </div>
            <h1>Home Comoponent</h1>
            <div className="cat-wrapper">
                <div className='img-wrapper item'>
                    <img src={phoneImg} alt=' not found'/>
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price : $1000
                    </span>
                    </div>
                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>
                    </div>
                
            </div>
        </div>
    )
}
 export default Home;
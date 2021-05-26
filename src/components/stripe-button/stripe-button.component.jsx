import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token); //charging
    alert('Payment Successful')
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IvHWmDEAqdtXL4usiAVprhk1JKhBYUvQ9VLNKlyQy0Yq5Oh3hzmIQKBNv5ZgiBPZ21W7AJZrK0r2UzFy0MKKzmo00oA8Ot1dA';

    return(
        <StripeCheckout 
        label='Pay Now'
        name='Lion Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;

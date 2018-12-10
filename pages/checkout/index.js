import React, {Component} from 'react';
import Link from "next/link";
import Btn from "../../components/Btn";

class CheckoutIndex extends Component {
    static getInitialProps(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({checkoutName: 'Wow'})
            }, 1000)
        });
    }

    render() {
        return (
            <div>
                <h2>Checout name {this.props.checkoutName}</h2>
                <p>Go to <Link href="/"><a>Homepage</a></Link></p>
                <Link href="/" passHref>
                    <Btn>Homepage</Btn>
                </Link>

                <Link href="/checkout" passHref>
                    <Btn>To itself</Btn>
                </Link>
            </div>
        );
    }
}

export default CheckoutIndex;
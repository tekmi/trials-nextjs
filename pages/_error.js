import React from 'react'
import Link from 'next/link';

export default class Error extends React.Component {
    static getInitialProps({ res, err, pathname, query }) {
        console.log(pathname, query);
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        return (
            <>
                <p>
                    {this.props.statusCode && `An error ${this.props.statusCode} occurred`}
                </p>
                <p>Go to <Link href={{ pathname: '/auth', query: { name: 'FromError' } }}><a>Auth</a></Link></p>
            </>

        )
    }
};
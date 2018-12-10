import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import AElement from "../../components/AElement";
import React from "react";

const AuthIndex = (props) => (
    <>
        <Head>
            <title>My title: {props.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>
        <div>Welcome to auth/index.js! {props.title}</div>
        <p>Go to <Link href="/"><a>Homepage</a></Link></p>
        <button onClick={() => Router.push('/')}>Click to go Homepage</button>
        <img src="/static/flux.png" alt="wow" />

        <AElement href="/">
            Hmm Auth
        </AElement>
    </>
);

AuthIndex.getInitialProps = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({title: 'Auth TITLE'})
        },500)
    });
};

export default AuthIndex;

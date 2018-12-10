import Link from 'next/link';
import React from "react";
import getConfig from 'next/config'

import User from "../components/User";
import AElement from "../components/AElement";

export default () => {

    const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

    return (
        <div>
            <h1>Welcome to index.js!! {publicRuntimeConfig.staticFolder}</h1>
            <User name="Adam" age={32}/>

            <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
            <p>Go to <Link href="/checkout" passHref><a href="/somewhere_else?hmm=1">Checkout Again</a></Link></p>
            <p>Go to <Link href="/not-existing"><a>Nowhere</a></Link></p>

            <AElement href="/">
                Hmm Auth
            </AElement>

            <style global jsx>{`
          body {
            background-color: lightblue;
          }
        `}</style>
        </div>
    );
}
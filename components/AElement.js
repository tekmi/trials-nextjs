import { withRouter } from 'next/router'
import React from "react";

const AElement = ({ children, router, href }) => {
    const style = {
        marginLeft: 10,
        color: router.pathname === href? 'red' : 'black'
    };

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
};

export default withRouter(AElement)
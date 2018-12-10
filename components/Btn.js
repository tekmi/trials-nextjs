import React from 'react';
import {withRouter} from 'next/router';

const Btn = ({href, onClick, children, router}) => (
<div>
    <button onClick={onClick} style={{ fontWeight: router.pathname === href ? 'bold' : 'normal' }}>
        {children}
    </button>
</div>
);

export default withRouter(Btn);
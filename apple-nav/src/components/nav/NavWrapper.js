import React from 'react';

const NavWrapper = props => {
    return (
        <div className="nav-wrapper">
            {props.children}
        </div>
    )
}

export default NavWrapper;
import React from 'react';
import NavBar from '../navBar';

const Layout = (props) => {
    return (
        <div>
            <NavBar />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;

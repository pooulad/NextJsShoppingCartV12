import React from 'react'

function Layout(props) {
    return (
        <>
            <header>header</header>
            <main>{props.children}</main>
            <footer>footer</footer>
        </>
    )
}

export default Layout
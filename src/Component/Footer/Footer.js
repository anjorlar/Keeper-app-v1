import React from 'react'

let year = new Date().getFullYear()
const Footer = () => {
    return (
        <footer>
            <h2>
                Copyright &copy;{year}
            </h2>
        </footer>
    )
}

export default Footer;
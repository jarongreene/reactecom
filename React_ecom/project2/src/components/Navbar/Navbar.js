import React from 'react'
import style from '../../App.css'



const Navbar = () => {
    return (
        <div>
            <header>
    <nav class={style.navbar}>
        <h1>Shonen Rocks!</h1>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="product.html">Product</a></li>
            <li><a href="contact.html">Contact</a></li>

        </ul>
    </nav>
</header>
        </div>
    )
}

export default Navbar;
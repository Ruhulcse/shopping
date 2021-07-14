import React from 'react'
import Cart from '../Components/Cart'
import Nav from '../Components/Nav'
import HomeScreen from './HomeScreen'

function MainScreen() {
    return (
        <div>
            <Nav/>
            <Cart/>
            <HomeScreen/>
        </div>
    )
}

export default MainScreen

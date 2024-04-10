import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import ComicCarousel from './ComicCarousel.js'

export default function Home() {
    

    return (
        <div className="position-relative vh-100">
            <Header />
            <ComicCarousel />
        </div>
    )
}

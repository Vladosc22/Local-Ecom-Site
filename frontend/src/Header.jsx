import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="header-content">
                <div className="header-left">
                    <h1 className="logo">
                        <span className="logo-icon">🛍️</span>
                        Vlados Shop
                    </h1>
                    <p className="tagline">Your One-Stop Product Catalog</p>
                </div>
                <nav className="header-nav">
                    <a href="#" className="nav-link active">Catalog</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
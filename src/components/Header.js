import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from '../styles/Home.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          CARGO
        </div>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <a href="#home">Beranda</a>
          <a href="#features">Fitur</a>
          <a href="#testimonials">Testimoni</a>
          <a href="#join">Bergabung</a>
          <button className={styles.navButton}>Mulai Sekarang</button>
        </nav>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  )
}
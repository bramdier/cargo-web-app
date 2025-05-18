import { FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <h3><span>Cargo</span></h3>
          <p>Komunitas kalistenik modern untuk semua level</p>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/cargo_jkt?igsh=MTZrMnI0cnh6OW9xdg==" target="_blank"><FaInstagram size={20} /></a>
            <a href="#"><FaYoutube size={20} /></a>
            <a href="#"><FaDiscord size={20} /></a>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <div>
            <h4>Navigasi</h4>
            <ul>
              <li><a href="#home">Beranda</a></li>
              <li><a href="#features">Fitur</a></li>
              <li><a href="#testimonials">Testimoni</a></li>
              <li><a href="#join">Bergabung</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Kontak</h4>
            <ul>
              <li>Email: abrahamsiregar99@gmail.com</li>
              <li>Telepon: +62 822  745 836 89</li>
              <li>Alamat: Gor Grogol, Jakarta Barat</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Cargo. All rights reserved.</p>
      </div>
    </footer>
  )
}
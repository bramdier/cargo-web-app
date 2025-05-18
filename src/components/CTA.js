import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

export default function CTA() {
  return (
    <section id="join" className={styles.cta}>
      <motion.div 
        className={styles.ctaContainer}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Siap Memulai Perjalanan Kalistenik Anda?</h2>
          <p className={styles.ctaText}>
            Bergabunglah dengan komunitas kami sekarang dan dapatkan akses ke program eksklusif, 
            grup diskusi, dan sesi latihan bersama.
          </p>
        </div>
        <a
            href="https://forms.gle/oFgiRUgbq5TEB9r17"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.primaryButton} ${styles.glowEffect}`}
          >
            Daftar Sekarang
          </a>
      </motion.div>
    </section>
  )
}
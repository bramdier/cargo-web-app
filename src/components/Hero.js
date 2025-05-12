import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>Transformasi</span> Fisik Anda Dimulai Di Sini
        </motion.h1>
        
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Bergabung dengan komunitas kalistenik paling futuristik dan capai potensi fisik maksimal Anda
        </motion.p>
        
        <motion.div 
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className={`${styles.primaryButton} ${styles.glowEffect}`}>
            Daftar Sekarang
          </button>
          <button className={styles.secondaryButton}>
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </div>
      
      <div className={styles.heroVisual}>
        <div className={styles.floatingElements}>
          <motion.div 
            className={styles.floatingCircle1}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className={styles.floatingCircle2}
            animate={{
              y: [0, -30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </section>
  )
}
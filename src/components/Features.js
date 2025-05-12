import { motion } from 'framer-motion'
import { FaUsers, FaCalendarAlt, FaTrophy, FaChartLine } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

const features = [
  {
    icon: <FaUsers size={40} />,
    title: "Komunitas Solid",
    description: "Bergabung dengan 50+ anggota aktif yang saling mendukung"
  },
  {
    icon: <FaCalendarAlt size={40} />,
    title: "Program Terstruktur",
    description: "Latihan bertahap dari pemula hingga advanced"
  },
  {
    icon: <FaTrophy size={40} />,
    title: "Latihan Kompetitif",
    description: "Menjadi pemenang terhadap diri sendiri"
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Progress Tracking",
    description: "Pantau perkembangan latihan Anda"
  }
]

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Kenapa Memilih Kami?</h2>
        <p className={styles.sectionSubtitle}>Komunitas kalistenik dengan pendekatan modern dan ilmiah</p>
      </div>
      
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            className={styles.featureCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.featureIcon}>
              {feature.icon}
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
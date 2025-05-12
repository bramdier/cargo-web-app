import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

const testimonials = [
  {
    name: "Abraham Dier Spiez",
    role: "Anggota 2 Tahun",
    content: "Sejak gabung di Cargo, skill street workout saya berkembang pesat. Komunitasnya sangat supportive!",
    image: "/images/avatar-1.jpg"
  },
  {
    name: "Lemmy Junior",
    role: "Anggota 1 Tahun",
    content: "Program untuk perempuan di sini sangat bagus. Saya bisa mencapai first pull-up dalam 3 bulan!",
    image: "/images/avatar-2.jpg"
  },
  {
    name: "Cristoper Kennard",
    role: "Anggota 6 Bulan",
    content: "Coach-nya profesional banget. Teknik diajarkan dengan detail dan aman untuk pemula seperti saya.",
    image: "/images/avatar-3.jpg"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Kata Mereka</h2>
        <p className={styles.sectionSubtitle}>Testimoni anggota komunitas kami</p>
      </div>
      
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={styles.testimonialCard}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.testimonialContent}>
              <p>"{testimonial.content}"</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className={styles.testimonialImage}
              />
              <div>
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
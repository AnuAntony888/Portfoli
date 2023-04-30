import React from 'react'
import styles from '../../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.ab}>
      ddddddddd
      <p>ssssssssssss</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  )
}

export default About

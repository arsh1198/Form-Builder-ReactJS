import { motion, useAnimation } from 'framer-motion'
import { useState, useMemo } from 'react'

const variants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
}

const AnimatedText = ({ text }) => {
  const controls = useAnimation()
  const [localText, setLocalText] = useState('')

  useMemo(() => {
    controls.start('hidden').then(() => {
      setLocalText(text)
      controls.start('visible')
    })
  }, [controls, text])

  return (
    <motion.p
      variants={variants}
      initial="visible"
      animate={controls}
      transition={{
        duration: 0.15
      }}
    >
      {localText}
    </motion.p>
  )
}

export default AnimatedText

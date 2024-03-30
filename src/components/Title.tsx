'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const TitleSection = styled.div`
  display: flex;
    margin-bottom: 4em;

  }
`
const Title = ({ title }: { title: string }) => {
  const [isClient, setIsClient] = useState(false)

  const arr: string[] = [...title]
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <TitleSection>
      {isClient &&
        arr.map((t, index) => (
          <motion.div
            key={t + index}
            initial={{ opacity: 0.4, y: '100%', rotateX: -90 }}
            animate={{ opacity: 1, y: '0%', rotateX: 0 }}
            transition={{
              type: 'spring',
              duration: (index + 1) * 0.3,
            }}
            className="title"
          >
            <span>{t}</span>
          </motion.div>
        ))}
    </TitleSection>
  )
}

export default Title

import { motion } from 'framer-motion'

function Light({ x, y, delay }) {
    return (
        <motion.div
            style={{
                position: 'absolute',
                top: y,
                left: x,
                width: 8,
                height: 8,
                borderRadius: '50%',
                display: 'inline-block',
                backgroundColor: '#fcc03d'
            }}
            initial={{
                scale: 1,
                opacity: 1
            }}
            animate={{
                scale: 0.9,
                opacity: 0
            }}
            transition={{
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
                duration: 0.4,
                delay: delay
            }}
        ></motion.div>
    )
}

export default Light

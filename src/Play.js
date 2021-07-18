import { motion } from 'framer-motion';

function Play({ start, disable }) {
    const warn = new Audio('/warning.wav')
    return (
        <motion.div
            style={{
                backgroundSize: 'contain',
                backgroundImage: 'url(./play.png)'
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.4,
                ease: "easeInOut"
            }}
            onClick={() => {
                if (disable) {
                    return
                }
                warn.play()
                start()
            }}>
            <motion.img
                initial={{
                    rotate: -16
                }}
                animate={{
                    rotate: 16
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear',
                    duration: 0.4
                }}
                srcSet="hand.png"
                alt="Hand"
                style={{
                    width: 36,
                    height: 36,
                    x: 38,
                    y: 42
                }} />
        </motion.div>
    )
}

export default Play
import { motion } from 'framer-motion';

function Play({ change }) {
    return (
        <motion.div
            style={{
                backgroundSize: 'contain',
                backgroundImage: 'url(./play.png)'
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.1 }}
            transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.4,
                ease: "easeInOut"
            }}
            onClick={change}>
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
                    width: 40,
                    height: 40,
                    x: 56,
                    y: 56
                }} />
        </motion.div>
    )
}

export default Play
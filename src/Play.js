import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function Play({ start, disable }) {
    const control = useAnimation()
    const warn = new Audio('/warning.wav')
    useEffect(() => {
        if (disable) {
            return
        }
        control.start({
            scale: 0.8
        })
    }, [control, disable])
    return (
        <motion.div
            style={{
                backgroundSize: 'contain',
                backgroundImage: 'url(./play.png)'
            }}
            animate={control}
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
                control.start({
                    scale: 1
                })
                control.stop()
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
                    display: disable ? 'none' : 'block',
                    width: 36,
                    height: 36,
                    x: 38,
                    y: 42
                }} />
        </motion.div>
    )
}

export default Play
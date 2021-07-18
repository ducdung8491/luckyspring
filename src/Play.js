import { motion } from 'framer-motion';

function Play({ start, disable }) {
    const warn = new Audio('/warning.wav')
    const style = (disable) => {
        const s = {
            backgroundSize: 'contain',
            backgroundImage: 'url(./play.png)'
        }
        if (disable) {
            return s
        }
        return {
            ...s,
            animationName: 'play',
            animationDuration: '0.4s',
            animationDirection: 'alternate',
            animationIterationCount: 'infinite'
        }
    }
    return (
        <div
            style={style(disable)}
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
                    display: disable ? 'none' : 'block',
                    width: 36,
                    height: 36,
                    x: 38,
                    y: 42
                }} />
        </div>
    )
}

export default Play
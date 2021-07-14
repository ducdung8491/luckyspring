import useCountdown from "@bradgarropy/use-countdown"
import { AnimatePresence, motion } from "framer-motion"

function Countdown({ complete }) {
    const countdown = useCountdown({
        minutes: 5,
        format: 'mm:ss',
        onCompleted: complete
    })
    return (
        <div style={{
            color: 'white',
            padding: 16
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <AnimatePresence>
                    <motion.h1
                        style={{
                            margin: 0,
                            fontSize: 18
                        }}
                        key={countdown.seconds}
                        exit={{
                            y: 6,
                            opacity: 0,
                            position: "absolute"
                        }}
                        initial={{
                            y: -6,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.2
                        }}>
                        00:{countdown.formatted}
                    </motion.h1>
                </AnimatePresence>
            </div>
            <p style={{
                margin: 0,
                fontSize: 14
            }}>Thời gian của bạn sắp hết, nhanh tay trúng ngay SH</p>
        </div>
    )
}

export default Countdown
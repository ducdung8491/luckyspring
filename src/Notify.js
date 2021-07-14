import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

function Notify() {
    const [i, setI] = useState(0)
    const notifies = [
        'Chúc mừng Dũng đã trúng CPhone 20',
        'Chúc mừng Dũng đã trúng SH 150i',
        'Chúc mừng Dũng đã trúng máy ảnh Canon Z9000',
        'Chúc mừng Dũng đã trúng CPhone 20',
        'Chúc mừng Dũng đã trúng CPhone 21',
        'Chúc mừng Dũng đã trúng CPhone 22',
        'Chúc mừng Dũng đã trúng CPhone 23',
    ]
    useEffect(() => {
        const id = setTimeout(() => {
            setI((i + 1) % 7)
        }, 1800)
        return () => {
            clearTimeout(id)
        }
    }, [i])
    return (
        <div style={{
            width: '100%',
            height: '40px',
            background: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        }}>
            <AnimatePresence>
                <motion.div
                    key={i}
                    exit={{
                        y: 16,
                        opacity: 0,
                        position: "absolute"
                    }}
                    initial={{
                        y: -16,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        ease: 'easeIn',
                        duration: 0.8
                    }}>
                    {notifies[i]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Notify
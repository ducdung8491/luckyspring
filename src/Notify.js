import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

function Notify() {
    const [i, setI] = useState(0)
    const notifies = [
        'Chúc mừng 0987778*** đã trúng 100.000 thẻ nạp',
        'Chúc mừng 0987778*** đã trúng Iphone XS Max',
        'Chúc mừng 0987237*** đã trúng 50.000 thẻ nạp',
        'Chúc mừng 0918787*** đã trúng 200.000 thẻ nạp',
        'Chúc mừng 0923453*** đã trúng 50.000 thẻ nạp',
        'Chúc mừng 0983499*** đã trúng xe máy SH 150i',
        'Chúc mừng 0978812*** đã trúng 500.000 thẻ nạp',
        'Chúc mừng 0917283*** đã trúng 50.000 thẻ nạp',
        'Chúc mừng 0919919*** đã trúng 1 đồng hồ',
        'Chúc mừng 0913857*** đã trúng 100.000 thẻ nạp',
        'Chúc mừng 0982009*** đã trúng 50.000 thẻ nạp',
        'Chúc mừng 0922343*** đã trúng 200.000 thẻ nạp',
        'Chúc mừng 0918887*** đã trúng 50.000 thẻ nạp',
    ]
    useEffect(() => {
        const id = setTimeout(() => {
            setI((i + 1) % 7)
        }, 4000)
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
            color: 'white',
            overflow: 'hidden'
        }}>
            <AnimatePresence>
                <motion.div
                    key={i}
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
                    {notifies[i]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Notify
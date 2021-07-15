import { AnimatePresence, motion } from "framer-motion"

function Dialog({ children, isOpen, onClose, delay }) {
    return (
        <AnimatePresence exitBeforeEnter>
            {isOpen && (
                <motion.div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 7,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 16,
                        boxSizing: 'border-box'
                    }}
                    variants={{
                        visible: {
                            opacity: 1,
                            transition: {
                                delay: delay ?? 0
                            }
                        },
                        hidden: {
                            opacity: 0
                        }
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        style={{
                            flex: '1 1',
                            width: 'calc(100% - 32px)',
                            maxWidth: 480,
                            margin: '0 auto',
                            padding: 16,
                            background: 'white',
                            borderRadius: 8,
                            textAlign: 'center',
                            boxSizing: 'border-box',
                            position: 'relative'
                        }}
                        variants={{
                            visible: {
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: delay ?? 0
                                }
                            },
                            hidden: {
                                scale: 0,
                                opacity: 0
                            }
                        }}
                    >
                        {/* <div
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                padding: 8
                            }}
                        >
                            <img srcSet="close.png" alt="Close" style={{ width: 16, height: 16 }} />
                        </div> */}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Dialog
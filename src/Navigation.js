import { useState } from "react"
import Button from "./Button"
import Dialog from "./Dialog"

function RuleBox({ isOpen, onClose }) {
    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <h3 style={{ marginTop: 0 }}>Luật chơi</h3>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <Button text="Đã hiểu" onClick={onClose} />
        </Dialog>
    )
}

function AdwardBox({ isOpen, onClose }) {
    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <h3 style={{ marginTop: 0 }}>Thể lệ</h3>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <Button text="Đã hiểu" onClick={onClose} />
        </Dialog>
    )
}

function Navigation() {
    const [box, setBox] = useState(null)
    return (
        <>
            <div style={styles.container}>
                <div style={styles.item}>
                    <a href="tel:+84983454667"><img srcSet="call.png" alt="Call" style={{ width: 24, height: 24 }} /></a>
                </div>
                <div
                    onClick={() => setBox('rule')}
                    style={styles.item}
                >Thể lệ</div>
                <div
                    onClick={() => setBox('adward')}
                    style={styles.item}
                >Giải thưởng</div>
            </div>
            <RuleBox isOpen={box === 'rule'} onClose={() => setBox(null)} />
            <AdwardBox isOpen={box === 'adward'} onClose={() => setBox(null)} />
        </>
    )
}

const styles = {
    container: {
        maxWidth: 560,
        width: '100%',
        margin: 'auto',
        height: 56,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        alignItems: 'center'
    },
    item: {
        flex: '1 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 500
    }
}

export default Navigation
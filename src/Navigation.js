import { useState } from "react"
import Button from "./Button"
import Dialog from "./Dialog"

function RuleBox({ isOpen, onClose }) {
    return (
        <Dialog isOpen={isOpen} onClose={onClose}>
            <h3 style={{ marginTop: 0 }}>Luật chơi</h3>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <p>Note: The max-width and max-height mixins only apply their maximum when the viewport is large enough to accommodate the specified value when accounting for the specified margin on either side. When the viewport is smaller, the dialog is sized such that the given margin is retained around the edges.</p>
            <Button text="Đã hiểu" onClick={onClose} />
        </Dialog>
    )
}

function Navigation() {
    const [isOpenRule, setIsOpenRule] = useState(false)
    return (
        <>
            <div style={styles.container}>
                <div style={styles.item}>
                    <a href="tel:+84983275435"><img srcSet="call.png" alt="Call" style={{ width: 24, height: 24 }} /></a>
                </div>
                <div
                    onClick={() => setIsOpenRule(true)}
                    style={styles.item}
                >Thể lệ</div>
                <div style={styles.item}>Giải thưởng</div>
            </div>
            <RuleBox isOpen={isOpenRule} onClose={() => setIsOpenRule(false)} />
        </>
    )
}

const styles = {
    container: {
        maxWidth: 560,
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
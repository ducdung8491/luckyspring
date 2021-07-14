function Navigation() {
    return (
        <div style={styles.container}>
            <div style={styles.item}>
                <a href="tel:+840918268491"><img srcSet="call.png" alt="Call" style={{ width: 24, height: 24 }} /></a>
            </div>
            <div style={styles.item}>Thể lệ</div>
            <div style={styles.item}>Giải thưởng</div>
        </div>
    )
}

const styles = {
    container: {
        width: '100%',
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
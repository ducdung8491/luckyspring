function PinCount({count}) {
    return (
        <div style={{
            fontSize: 16,
            fontWeight: "bold",
            padding: '4px 24px 8px',
            color: 'white',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '0 0 16px 16px',
            border: '2px solid #e8693c',
            borderTop: 'none'
        }}>Bạn còn {count} lượt quay</div>
    )
}

export default PinCount
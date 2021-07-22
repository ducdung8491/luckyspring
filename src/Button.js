function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: '#fb401c',
                borderRadius: 4,
                borderColor: 'rgba(27, 31, 35, 0.15)',
                padding: '4px 16px',
                fontSize: 14,
                color: 'white',
                lineHeight: '20px',
                minWidth: 64
            }}
        >
            {text}
        </button>
    )
}

export default Button
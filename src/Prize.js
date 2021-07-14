function Prize({ children, selected }) {
    return (
        <div style={{
            backgroundImage: 'url(./prizebg.png)',
            borderRadius: 12,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            opacity: selected ? 0.6 : 1
        }}>
            {children}
        </div >
    )
}

export default Prize
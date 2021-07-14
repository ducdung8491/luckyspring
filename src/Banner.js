function Banner() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auth',
            padding: '0 16px',
            boxSizing: 'border-box'
        }}>
            <img
                srcSet="banner.png"
                alt="Banner"
                style={{
                    maxWidth: '100%'
                }} />
        </div>
    )
}

export default Banner
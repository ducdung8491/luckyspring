function Banner() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 96,
            padding: '0 16px',
            boxSizing: 'border-box',
            overflow: "hidden"
        }}>
            <img
                srcSet="banner.png"
                alt="Banner"
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%'
                }} />
        </div>
    )
}

export default Banner
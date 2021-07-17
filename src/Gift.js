function Gift({ image, style }) {
    return (
        <img
            srcSet={image}
            alt="Gift"
            style={{
                ...style,
                width: '100%',
                height: '100%'
            }} />
    )
}

export default Gift
function Gift({ image }) {
    return (
        <img
            srcSet={image}
            alt="Gift"
            style={{
                width: '100%',
                height: '100%'
            }} />
    )
}

export default Gift
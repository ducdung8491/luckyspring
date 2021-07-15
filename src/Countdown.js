import useCountdown from "@bradgarropy/use-countdown"

function Countdown({ complete }) {
    const countdown = useCountdown({
        minutes: 5,
        format: 'mm:ss',
        onCompleted: complete
    })
    return (
        <div style={{
            color: 'white',
            padding: 16,
            height: 70,
            overflow: 'hidden',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                fontSize: 18
            }}>00:{countdown.formatted}</div>
            <p style={{
                margin: 0,
                fontSize: 14
            }}>Thời gian của bạn sắp hết, nhanh tay trúng ngay SH</p>
        </div>
    )
}

export default Countdown
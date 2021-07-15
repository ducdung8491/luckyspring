import useCountdown from "@bradgarropy/use-countdown"

function Countdown({ complete, count }) {
    const countdown = useCountdown({
        minutes: 5,
        format: 'mm:ss',
        onCompleted: complete
    })
    return (
        <div style={{
            color: 'white',
            padding: 8,
            overflow: 'hidden',
            boxSizing: 'border-box',
            textAlign: 'center'
        }}>
            Thời gian còn <b style={{ fontSize: 18 }}>00:{countdown.formatted}</b> nhanh tay nhận ngay giải thưởng
        </div>
    )
}

export default Countdown
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
            textAlign: 'center',
            fontSize: 14
        }}>
            Bạn có <b style={{ fontSize: 16 }}>00:{countdown.formatted}</b> để tham gia trò chơi hết thời gian cơ hội sẽ được trao cho người khác.
        </div>
    )
}

export default Countdown
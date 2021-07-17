import { useEffect, useState } from 'react'
import Prize from './Prize'
import Gift from './Gift'
import Play from './Play'
import Light from './Light'

function Pin({ steps, count, onCompleted }) {
    const [isRun, setIsRun] = useState(false)
    const [data, setData] = useState({ id: null, i: 0 })
    const [a, setA] = useState([])
    const sleep = (ms) => new Promise(res => setTimeout(res, ms))
    useEffect(() => {
        const loop = async () => {
            const { id, i } = data
            if (!a[i]) {
                return
            }
            if (i === (a.length - 1)) {
                onCompleted(id)
                setIsRun(false)
                return
            }
            await sleep(a[i])
            setData({
                id: (id + 1) % 8,
                i: i + 1
            })
        }
        loop()
    }, [a, data, onCompleted])
    const start = () => {
        setData({ id: 0, i: 0 })
        setA(steps)
        setIsRun(true)
    }
    const lightMap = [
        {
            x: 2,
            y: 2
        },
        {
            x: '25%',
            y: 0
        },
        {
            x: '50%',
            y: 0
        },
        {
            x: '75%',
            y: 0
        },
        {
            x: 'calc(100% - 2px)',
            y: 2
        },
        {
            x: '100%',
            y: '25%'
        },
        {
            x: '100%',
            y: '50%'
        },
        {
            x: '100%',
            y: '75%'
        },
        {
            x: 'calc(100% - 2px)',
            y: 'calc(100% - 2px)'
        },
        {
            x: '75%',
            y: '100%'
        },
        {
            x: '50%',
            y: '100%'
        },
        {
            x: '25%',
            y: '100%'
        },
        {
            x: 2,
            y: 'calc(100% - 2px)'
        },
        {
            x: '0',
            y: '75%'
        },
        {
            x: 0,
            y: '50%'
        },
        {
            x: 0,
            y: '25%'
        }
    ]
    return (
        <div
            initial="hidden"
            animate="visible"
            style={{
                backgroundImage: 'url(boxbg.png)',
                backgroundSize: 'contain',
                width: 360,
                height: 360,
                display: "grid",
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                margin: 0,
                gap: 8,
                padding: 32,
                boxSizing: 'border-box',
                borderRadius: 6,
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <Prize selected={data.id === 0}>
                <Gift style={{ borderRadius: '50%', transform: 'scale(0.9)' }} image="lostturn.jpeg" />
            </Prize>
            <Prize selected={data.id === 1}>
                <Gift image="gift2.png" />
            </Prize>
            <Prize selected={data.id === 2}>
                <Gift image="gift3.png" />
            </Prize>
            <Prize selected={data.id === 7}>
                <Gift image="gift7.png" />
            </Prize>
            <Play start={start} disable={count < 1 || isRun} />
            <Prize selected={data.id === 3}>
                <Gift image="gift5.png" />
            </Prize>
            <Prize selected={data.id === 6}>
                <Gift image="gift4.png" />
            </Prize>
            <Prize selected={data.id === 5}>
                <Gift image="gift3.png" />
            </Prize>
            <Prize selected={data.id === 4}>
                <Gift image="gift6.png" />
            </Prize>
            <div style={{
                position: 'absolute',
                cursor: 'none',
                width: 'calc(100% - 22px)',
                height: 'calc(100% - 22px)',
                top: 8,
                left: 8
            }}>
                {lightMap.map((i, j) => (
                    <Light key={j} {...i} delay={j * 0.02} />
                ))}
            </div>
        </div>
    )
}

export default Pin
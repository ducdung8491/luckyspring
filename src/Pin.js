import { useEffect, useState } from 'react'
import Prize from './Prize'
import Gift from './Gift'
import Play from './Play'

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
                overflow: 'hidden'
            }}
        >
            <Prize selected={data.id === 0}>
                <Gift image="gift1.png" />
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
        </div>
    )
}

export default Pin
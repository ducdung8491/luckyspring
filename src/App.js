import { useEffect, useState } from 'react';
import './App.css';
import Prize from './Prize'
import Gift from './Gift'
import Play from './Play'
import Banner from './Banner'
import Countdown from './Countdown'
import Notify from './Notify'
import Navigation from './Navigation';
import Dialog from './Dialog';
import Button from './Button'
import PinCount from './PinCount';

function App() {
  const [isOpenAddCount, setIsOpenAddCount] = useState(true)
  const [a, setA] = useState([])
  const [data, setData] = useState({ id: null, i: 0 })
  const sleep = (ms) => new Promise(res => setTimeout(res, ms))
  useEffect(() => {
    const loop = async () => {
      const { id, i } = data
      if (!a[i]) {
        return
      }
      if (i === (a.length - 1)) {
        setIsOpenAddCount(true)
      }
      await sleep(a[i])
      setData({
        id: (id + 1) % 8,
        i: i + 1
      })
    }
    loop()
  }, [a, data])
  const change = () => {
    setData({ id: 0, i: 0 })
    setA([14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 20, 24, 31, 39, 49, 61, 83, 94, 95, 95, 95, 95, 98, 98, 98, 99, 99, 99, 99, 100])
  }
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(/bg.jpg)',
      backgroundSize: 'cover',
      paddingTop: 40,
      paddingBottom: 56,
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 40,
        overflow: 'hidden'
      }}>
        <Notify />
      </div>
      <Banner />
      <Countdown />
      <PinCount count={1} />
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
        <Play change={change} />
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
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      }}>
        <Navigation />
      </div>
      <Dialog isOpen={isOpenAddCount} onClose={() => setIsOpenAddCount(false)} delay={1}>
        <img
          srcSet="gift1.png"
          alt="Times"
          style={{
            width: 56,
            height: 56,
            marginBottom: 16
          }}
        />
        <h3
          style={{
            margin: '0 0 4px 0',
            color: '#fb401c'
          }}
        >Lươt quay may mắn</h3>
        <p
          style={{
            color: '#586069',
            marginTop: 8
          }}
        >Bạn may mắn nhận được một lượt quay, sử dụng ngay để có được những phần quà hấp dẫn.</p>
        <Button text="Quay luôn" onClick={() => setIsOpenAddCount(false)} />
      </Dialog>
    </div >
  );
}

export default App;

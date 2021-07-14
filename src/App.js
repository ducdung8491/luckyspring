import { useEffect, useState } from 'react';
import './App.css';
import Prize from './Prize'
import Gift from './Gift'
import Play from './Play'
import Banner from './Banner'
import Countdown from './Countdown'
import Notify from './Notify'
import Navigation from './Navigation';

function App() {
  const [a, setA] = useState([])
  const [data, setData] = useState({ id: null, i: 0 })
  const sleep = (ms) => new Promise(res => setTimeout(res, ms))
  useEffect(() => {
    const loop = async () => {
      const { id, i } = data
      if (!a[i]) {
        return
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
    setA([14, 20, 24, 31, 39, 49, 61, 83, 94, 95, 95, 95, 95, 98, 98, 98, 99, 99, 99, 99, 100])
  }
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
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
      <div
        className="container"
        initial="hidden"
        animate="visible"
        style={{
          backgroundImage: 'url(./boxbg.png)',
          backgroundSize: 'contain'
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
    </div>
  );
}

export default App;

import { useCallback, useState } from 'react';
import './App.css';
import Banner from './Banner'
import Countdown from './Countdown'
import Notify from './Notify'
import Navigation from './Navigation';
import Dialog from './Dialog';
import Button from './Button'
import PinCount from './PinCount';
import Pin from './Pin';

function App() {
  const [count, setCount] = useState(2)
  const [isOpenAddCount, setIsOpenAddCount] = useState(true)
  const [sid, setSid] = useState(0)
  const [scripts] = useState([
    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 20, 24, 31, 39, 49, 61, 83, 94, 95, 95, 95, 95, 98, 98, 98, 99, 99, 99, 99, 100],
    [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 20, 24, 31, 39, 49, 61, 83, 94, 95, 95, 95, 95, 98, 98, 98, 99, 99, 99, 99, 100]
  ])
  const pinComplete = useCallback(() => {
    setIsOpenAddCount(true)
    setCount(c => c - 1)
    setSid(id => id + 1)
  }, [])
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
      <PinCount count={count} />
      <Pin steps={scripts[sid]} count={count} onCompleted={pinComplete} />
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
        >Lượt quay may mắn</h3>
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

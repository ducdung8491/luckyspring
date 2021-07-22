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
import { motion } from 'framer-motion';

const step = (count) => {
  return [...Array(count).fill(16), 20, 24, 31, 39, 49, 61, 83, 94, 95, 95, 95, 95, 98, 98, 98, 99, 99, 99, 99, 100]
}

const scripts = [
  {
    count: 1,
    steps: [
      step(33),
      step(34)
    ]
  },
  // {
  //   count: 2,
  //   steps: [
  //     step(37),
  //     step(34)
  //   ]
  // },
  // {
  //   count: 3,
  //   steps: [
  //     step(37),
  //     step(37),
  //     step(34)
  //   ]
  // }
]

const randomScript = () => {
  const min = 0
  const max = scripts.length || 0
  const i = Math.floor(Math.random() * (max - min) + min)
  return scripts[i]
}

function App() {
  const [script] = useState(randomScript())
  const [count, setCount] = useState(script.count)
  const [step, setStep] = useState(0)
  const [openBox, setOpenbox] = useState('add_turn')
  const pinComplete = useCallback((id) => {
    if (id === 0) {
      setOpenbox('good_luck')
    }
    if (id === 2 || id === 5) {
      setOpenbox('gift_card')
    }
    if (id === 4) {
      setOpenbox('gift_1_turn')
      setCount(c => c + 1)
    }
    setStep(s => s + 1)
  }, [])
  const start = useCallback(() => {
    setCount(c => c - 1)
  }, [])
  return (
    <>
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
        <Pin steps={script.steps[step]} start={start} count={count} onCompleted={pinComplete} />
        <PinCount count={count} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0
        }}>
          <Navigation />
        </div>
      </div >
      <AddCountBox open={openBox === 'gift_1_turn'} count={1} onClose={() => setOpenbox(null)} />
      <StartBox open={openBox === 'add_turn'} count={count} onClose={() => setOpenbox(null)} />
      <GoodLuckBox open={openBox === 'good_luck'} count={count} onClose={() => setOpenbox(null)} />
      <GiftCard open={openBox === 'gift_card'} onClose={() => setOpenbox(null)} />
    </>
  );
}

function GiftCard({ open, onClose }) {
  return (
    <Dialog isOpen={open} delay={1}>
      <div style={{
        position: 'relative',
        width: 'calc(100% + 32px)',
        paddingTop: 'calc(100% + 80px)',
        backgroundColor: 'red',
        marginLeft: -16,
        marginTop: -56,
        marginBottom: -56,
        marginRight: -16,
        borderRadius: 32,
      }}>
        <motion.img
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: 320,
            height: 320,
            zIndex: -1
          }}
          initial={{
            rotate: 0,
            x: '-50%',
            y: '-40%'
          }}
          animate={{
            rotate: 360,
            x: '-50%',
            y: '-40%'
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 6
          }}
          src="light.png" alt="Light" />
        <img
          style={{
            position: 'absolute',
            width: 240,
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -100%)'
          }}
          srcSet="congrat.png" alt="Coin" />
        <div style={{
          width: 'calc(100% - 48px)',
          height: 'calc(100% - 48px)',
          backgroundColor: 'white',
          position: 'absolute',
          top: 24,
          left: 24,
          borderRadius: 24,
          padding: 16,
          boxSizing: 'border-box'
        }}>
          <div style={{
            height: 174,
            overflowX: 'hidden',
            overflowY: 'scroll'
          }}>
            <h3 style={{marginTop: 0}}>Xin chúc mừng!</h3>
            <div>
            Bạn đã chiến thắng cơ hội NHẬN MIỄN PHÍ 500K vào tài khoản, MIỄN PHÍ toàn bộ 4G tốc độ cao, chat video call kết bạn vĩnh viễn. Thêm 200MB lướt net, chat facebook!. Vui lòng gửi xác nhận và chờ xử lý yêu cầu nhận thưởng của bạn.
            </div>
          </div>
        </div>
        <img
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0
          }}
          srcSet="lixifront.png" alt="Lixi Front" />
        <img
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            width: '20%'
          }}
          srcSet="coin.png" alt="Coin" />
        <img
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            width: '25%'
          }}
          srcSet="goldbox.png" alt="Coin" />
        <motion.img
          onClick={() => {
            window.lp.reward()
            onClose()
          }}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 24,
            width: 96,
            x: '-50%'
          }}
          initial={{
            scale: 0.8
          }}
          animate={{
            scale: 1
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
            duration: 0.4
          }}
          srcSet="receive.png" alt="Coin" />
        <img
          style={{
            position: 'absolute',
            height: 120,
            bottom: 120,
            left: '50%',
            transform: 'translate(-50%, 0)',
            pointerEvents: 'visible'
          }}
          srcSet="gift3.png" alt="Card" />
      </div>
    </Dialog>
  )
}

function GoodLuckBox({ open, count, onClose }) {
  return (
    <Dialog isOpen={open} delay={1}>
      <img
        srcSet="lostturn.jpeg"
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
      >Chúc bạn may mắn lần sau</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >Lượt chơi này bạn đã không may mắn, tôi tin lần sau bạn sẽ may mắn hơn nhiều</p>
      <Button text={count > 0 ? "Quay tiếp" : "Đóng"} onClick={onClose} />
    </Dialog>
  )
}

function AddCountBox({ open, count, onClose }) {
  return (
    <Dialog isOpen={open} delay={0.2}>
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
      >Chúc mừng bạn đã quay vào ô lì xì.</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >Bạn đã chiến thắng thêm ({count}) lượt quay bấm [OK] để tiếp tục quay!.</p>
      <Button text="OK" onClick={onClose} />
    </Dialog>
  )
}

function StartBox({ open, onClose }) {
  return (
    <Dialog isOpen={open} delay={0.2}>
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
      >QUAY MIỄN PHÍ NHẬN QUÀ NHƯ Ý</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >Tham gia chương trình vòng quay may mắn! Để có cơ hội nhận nhiều phần quà giá trị với tổng giải thưởng rất lớn.</p>
      <Button text="OK" onClick={onClose} />
    </Dialog>
  )
}

export default App;

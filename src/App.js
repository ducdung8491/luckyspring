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

const getNum = (k) => {
  const v = localStorage.getItem(k)
  if (!v) return null
  return parseInt(v)
}

function App() {
  const lsCount = getNum('lp_count')
  const lsStep = getNum('lp_step')
  const [script] = useState(randomScript())
  const [count, setCount] = useState(lsCount ?? script.count)
  const [step, setStep] = useState(lsStep ?? 0)
  const [openBox, setOpenbox] = useState('add_turn')
  localStorage.setItem('lp_count', count)
  localStorage.setItem('lp_step', step)
  const pinComplete = useCallback((id) => {
    if (id === 0) {
      setOpenbox('good_luck')
    }
    if (id === 2 || id === 5) {
      setOpenbox('gift_card')
    }
    if (id === 4) {
      setOpenbox('gift_1_turn')
      setCount(c => {
        localStorage.setItem('lp_count', c + 1)
        return c + 1
      })
    }
    setStep(s => {
      localStorage.setItem('lp_step', s + 1)
      return s + 1
    })
  }, [])
  const start = useCallback(() => {
    setCount(c => {
      localStorage.setItem('lp_count', c - 1)
      return c - 1
    })
  }, [])
  const trigger = useCallback(() => {
    if (count === 0) {
      setOpenbox('turn_out')
    }
  }, [count])
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
        <Pin trigger={trigger} steps={script.steps[step]} start={start} count={count} onCompleted={pinComplete} />
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
      <StartBox open={openBox === 'add_turn'} onClose={() => setOpenbox(null)} />
      <GoodLuckBox open={openBox === 'good_luck'} count={count} onClose={() => setOpenbox(null)} />
      <GiftCard open={openBox === 'gift_card'} onClose={() => setOpenbox(null)} />
      <TurnOutBox open={openBox === 'turn_out'} onClose={() => setOpenbox(null)} />
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
            <h3 style={{ marginTop: 0 }}>Xin ch??c m???ng!</h3>
            <div>
              B???n ???? chi???n th???ng c?? h???i NH???N MI???N PH?? 500K v??o t??i kho???n, MI???N PH?? to??n b??? 4G t???c ????? cao, chat video call k???t b???n v??nh vi???n. Th??m 200MB l?????t net, chat facebook!. Vui l??ng g???i x??c nh???n v?? ch??? x??? l?? y??u c???u nh???n th?????ng c???a b???n.
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
      >Ch??c b???n may m???n l???n sau</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >L?????t ch??i n??y b???n ???? kh??ng may m???n, t??i tin l???n sau b???n s??? may m???n h??n nhi???u</p>
      <Button text={count > 0 ? "Quay ti???p" : "????ng"} onClick={onClose} />
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
      >Ch??c m???ng b???n ???? quay v??o ?? l?? x??.</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >B???n ???? chi???n th???ng th??m ({count}) l?????t quay b???m [OK] ????? ti???p t???c quay!.</p>
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
      >QUAY MI???N PH?? NH???N QU?? NH?? ??</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >Tham gia ch????ng tr??nh v??ng quay may m???n! ????? c?? c?? h???i nh???n nhi???u ph???n qu?? gi?? tr??? v???i t???ng gi???i th?????ng r???t l???n.</p>
      <Button text="OK" onClick={onClose} />
    </Dialog>
  )
}
function TurnOutBox({ open, onClose }) {
  return (
    <Dialog isOpen={open} delay={0}>
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
      >B???n kh??ng c??n l?????t ch??i</h3>
      <p
        style={{
          color: '#586069',
          marginTop: 8
        }}
      >L?????t ch??i c???a b???n ???? h???t, h??y tham gia trong ?????t ti???p theo. Ch??c b???n may m???n</p>
      <Button text="OK" onClick={onClose} />
    </Dialog>
  )
}

export default App;

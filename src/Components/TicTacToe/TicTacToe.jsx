import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import circleIcon from '../Assets/circle.png'
import crossIcon from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", "", ""]

function TicTacToe() {
  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  let titleRef = useRef(null)

  let box0 = useRef(null)
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let box4 = useRef(null)
  let box5 = useRef(null)
  let box6 = useRef(null)
  let box7 = useRef(null)
  let box8 = useRef(null)

  let boxArray = [box0, box1, box2, box3, box4, box5 , box6, box7, box8]

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0 && data[num] === "") {
      e.target.innerHTML = `<img src='${crossIcon}'>`
      data[num] = 'x'
      setCount(++count)
    } else if(data[num] === "") {
      e.target.innerHTML = `<img src='${circleIcon}'>`
      data[num] = 'o'
      setCount(++count)
    }
    checkWin()
  }

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    }else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    }
  }

  const won = (winner) => {
    setLock(true)
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congratulations : <img src='${crossIcon}'>     Wins`
    } else if (winner === 'o') {
      titleRef.current.innerHTML = `Congratulations : <img src='${circleIcon}'>    Wins`
    }

  }

  const reset =()=>{
    setLock(false)
    data = ["", "", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = 'Tic Tac Toe Game In  <span> React</span>';
    boxArray.map((box)=>{
      box.current.innerHTML = ""
    })

  }
  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span> React</span>
      </h1>
      <div className='board'>
        <div className='row'>
          <div className='boxes' ref={box0}  onClick={(e) => { toggle(e, 0) }}></div>
          <div className='boxes' ref={box1} onClick={(e) => { toggle(e, 1) }}></div>
          <div className='boxes' ref={box2} onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className='row'>
          <div className='boxes' ref={box3} onClick={(e) => { toggle(e, 3) }}></div>
          <div className='boxes' ref={box4} onClick={(e) => { toggle(e, 4) }}></div>
          <div className='boxes' ref={box5} onClick={(e) => { toggle(e, 5) }}></div>
        </div>
        <div className='row'>
          <div className='boxes' ref={box6} onClick={(e) => { toggle(e, 6) }}></div>
          <div className='boxes' ref={box7} onClick={(e) => { toggle(e, 7) }}></div>
          <div className='boxes' ref={box8} onClick={(e) => { toggle(e, 8) }}></div>
        </div>
      </div>
      <div className='resetbutton'>
        <button className='reset' onClick={reset} >Reset</button>
      </div>

    </div>
  )
}

export default TicTacToe
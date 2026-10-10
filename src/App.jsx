import './App.css'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const explodeSound = new Audio('audio/explodesound.mp3');

function App() {
  const firstBoxRef = useRef(null);
  const noBtnRef = useRef(null);
  const noTextRef = useRef(null);
  const explodeRef = useRef(null);
  let timesHovered = 0;
  let btnExploded = false;

  const noBtnPos = { top: 0, left: 0, bottom: 0, right: 0 };

  useEffect(() => {
    const noBtnRect = noBtnRef.current.getBoundingClientRect();
    noBtnPos.top = noBtnRect.top;
    noBtnPos.left = noBtnRect.left;
    noBtnPos.bottom = noBtnRect.bottom;
    noBtnPos.right = noBtnRect.right;
  })

  function noBtnHover() {
    timesHovered++;
    const explode = explodeRef.current;
    const noBtn = noBtnRef.current;
    const noText = noTextRef.current;

    if (timesHovered === 10 && !btnExploded) {
      explodeSound.volume = 0.1;
      explodeSound.currentTime = 0;
      explodeSound.play();
      explode.style.display = "inline";
      noBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
      noBtn.style.cursor = "default";
      noText.textContent = "";
      btnExploded = true;
      setTimeout(() => {
        explode.style.display = "none";
      }, 1500)
    }

    const maxX = window.innerWidth - noBtnPos.right;
    const minX = -noBtnPos.left;

    const maxY = window.innerHeight - noBtnPos.bottom;
    const minY = -noBtnPos.top;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    if (!btnExploded) {
      noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  }

  function noBtnClick() {
    if (btnExploded) return;

    const explode = explodeRef.current;
    const noBtn = noBtnRef.current;
    const noText = noTextRef.current;

    explodeSound.volume = 0.1;
    explodeSound.currentTime = 0;
    explodeSound.play();
    explode.style.display = "inline";
    noBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    noBtn.style.cursor = "default";
    noText.textContent = "";
    btnExploded = true;
    setTimeout(() => {
      explode.style.display = "none";
    }, 1500)
  }

  return (
    <>
      <div className="box boxes" ref={firstBoxRef}>
        <img className="ryo" src="img/ryo.gif" alt="Ryo" width={90} draggable="false" />
        <h1 className="question">Would you like to view this gift?</h1>
        <div className="answers">
          <Link to="quiz" className="yes" viewTransition>YES</Link>
          <button className="no" ref={noBtnRef} onMouseOver={noBtnHover} onClick={noBtnClick}>
            <img className="explode" src="img/explosion-boom.gif" alt="explode" ref={explodeRef} draggable="false" />
            <p className="no-text" ref={noTextRef}>NO</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
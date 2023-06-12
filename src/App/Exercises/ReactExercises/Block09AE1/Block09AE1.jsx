import React, { useState } from 'react';

import './style.css';
import { MoreOrLessAdvanced } from '../MoreOrLessAdvanced/MoreOrLessAdvanced';
import { MoreOrLessGameAdmin } from '../MoreOrLessGameAdmin/MoreOrLessGameAdmin';

export function Block09AE1() {
  // eslint-disable-next-line
  const [clicks, setClicks] = useState(0);
  const [btnText, setBtnText] = useState('START');
  // eslint-disable-next-line
  const [stateBtn, setStateBtn] = useState(true);
  const [visibleTxt, setVisibleTxt] = useState('Hide');
  // eslint-disable-next-line
  const [answer, setAnswer] = useState('Nie');

  function clickHandler() {
    let currentClick = clicks + 1;
    setClicks(currentClick);
    setBtnText(`Kliknięto ${currentClick}`);

    if (currentClick >= 5) {
      setBtnText(`Kliknięto ${currentClick}`.concat(` - Gratulacje, >= 5`));
    }
  }

  function clickVisibleHandler() {
    let currentState = stateBtn;

    if (currentState) {
      setVisibleTxt(`Show`);
    } else {
      setVisibleTxt(`Hide`);
    }

    setStateBtn(!currentState);
  }

  function answerChangeHandler(ev) {
    let currentAnswer = ev.target.value;

    if (currentAnswer > 10) {
      setAnswer('Tak');
    } else {
      setAnswer('Nie');
    }
  }

  return (
    <div>
      <p>Jestem blok 09 AE1</p>
      <div>
        <h1>Kliknij 5</h1>
        <button className="btn09" onClick={clickHandler}>
          {btnText}
        </button>
      </div>
      <div>
        <h1>See or not</h1>
        <button className="btn09" onClick={clickVisibleHandler}>
          {visibleTxt}
        </button>
        {stateBtn && <p>Teraz mnie widać</p>}
      </div>
      <div>
        <h1>Czy A jest większe od 10?</h1>
        <input
          placeholder="A"
          type="number"
          onChange={answerChangeHandler}
        ></input>
        <h2>
          Odpowiedź: <span style={{ color: 'red' }}>{answer}</span>
        </h2>
      </div>
      <div>
        <MoreOrLessAdvanced />
      </div>
      <div>
        <MoreOrLessGameAdmin />
      </div>
    </div>
  );
}

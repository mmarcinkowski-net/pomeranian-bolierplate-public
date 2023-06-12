import React, { useState } from 'react';

import './style.css';

export function Block09AE1() {
  // eslint-disable-next-line
  const [clicks, setClicks] = useState(0);
  const [btnText, setBtnText] = useState('START');
  // eslint-disable-next-line
  const [stateBtn, setStateBtn] = useState(true);
  const [visibleTxt, setVisibleTxt] = useState('Hide');

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

  return (
    <div>
      <p>Jestem blok 09 AE1</p>
      <p>
        <h1>Kliknij 5</h1>
        <button className="btn09" onClick={clickHandler}>
          {btnText}
        </button>
      </p>
      <p>
        <h2>See or not</h2>
        <button className="btn09" onClick={clickVisibleHandler}>
          {visibleTxt}
        </button>
        {stateBtn && <p>Teraz mnie widać</p>}
      </p>
    </div>
  );
}

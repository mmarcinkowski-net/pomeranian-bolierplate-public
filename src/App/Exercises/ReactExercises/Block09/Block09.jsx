import React from 'react';

import './style.css';
import { Click5 } from '../Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';
import { MoreOrLessAdvanced } from '../MoreOrLessAdvanced/MoreOrLessAdvanced';
import { MoreOrLessAdv2 } from '../MoreOrLessAdv2/MoreOrLessAdv2';

export function Block09() {
  return (
    <div>
      <h1>Blok 9 - 13.06.2023</h1>
      <div>
        <hr />
        <Click5 />
        <hr />
        <SeeOrNot />
        <hr />
        <MoreOrLess />
        <hr />
        <MoreOrLessAdvanced />
        <hr />
        <MoreOrLessAdv2 />
      </div>
    </div>
  );
}

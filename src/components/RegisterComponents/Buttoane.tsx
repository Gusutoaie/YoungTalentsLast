import React, { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Buttoane.module.css';

export default function Buttoane({ onSubmit, onLogin }: { onSubmit: () => void; onLogin: () => void }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className={classes.buttoaneContainer}>
      <div className={classes.termeniSiConditi}>
        <Checkbox
          className={classes.checkbox}
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.currentTarget.checked)}
          label="Sunt de acord cu termenii şi condiţiile"
          tabIndex={-1}
          size="md"
          mr="xl"
          styles={{ input: { cursor: 'pointer' } }}
          aria-hidden
        />
      </div>
      <div className={classes.buttons}>
        <button className={classes.inregistrareButton} onClick={onSubmit} disabled={!termsAccepted}>Înregistrează-te</button>
        <button className={classes.intraInCont} onClick={onLogin}>Intră în cont</button>
      </div>
    </div>
  );
}

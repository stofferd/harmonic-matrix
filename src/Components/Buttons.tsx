import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import * as Tone from 'tone';
import { Synth } from 'tone';

const Btns = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: repeat(5, 100px);
`;

const Buttons = () => {
    const [synth, setSynth] = React.useState<null | Synth>(null);
    React.useEffect(() => {
        setSynth(new Tone.Synth().toDestination());
    }, [setSynth]);
    const numButtons = 20;
    const buttons = [];
    for (let i = 0; i < numButtons; i++) {
        buttons.push(<Button id={i} synth={synth} key={i} />);
    }
    return <Btns>{buttons}</Btns>;
};

export default Buttons;

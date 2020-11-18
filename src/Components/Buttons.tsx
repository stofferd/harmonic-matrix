import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import * as Tone from 'tone';
import { PolySynth } from 'tone';
import Play from './Play';

const Btns = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: repeat(5, 100px);
`;

const Buttons = () => {
    const [synth, setSynth] = React.useState<null | PolySynth>(null);
    const [matrix, _setMatrix] = React.useState<number[]>(
        new Array(25).fill(0),
    );
    const setMatrix = React.useCallback(
        (n, on) => {
            const newMatrix = [...matrix];
            newMatrix[n] = on;
            _setMatrix(newMatrix);
        },
        [matrix, _setMatrix],
    );
    React.useEffect(() => {
        setSynth(new Tone.PolySynth(Tone.Synth).toDestination());
    }, [setSynth]);
    const numButtons = 20;
    const buttons = [];
    for (let i = 0; i < numButtons; i++) {
        buttons.push(
            <Button
                active={matrix[i]}
                id={i}
                synth={synth}
                key={i}
                setMatrix={setMatrix}
            />,
        );
    }
    return (
        <Btns>
            {buttons}

            <Play matrix={matrix} synth={synth} />
        </Btns>
    );
};

export default Buttons;

import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import * as Tone from 'tone';
import { PolySynth } from 'tone';
import Play from './Play';
import AllHarmonics from './AllHarmonics';
import ClearHarmonics from './ClearHarmonics';

const Btns = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 100px);
    grid-template-rows: repeat(5, 100px);
`;

type Props = {
    noteCount: number;
};

const Buttons = ({ noteCount }: Props) => {
    const [synth, setSynth] = React.useState<null | PolySynth>(null);
    const [matrix, _setMatrix] = React.useState<number[]>(
        new Array(noteCount).fill(0),
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
            <AllHarmonics noteCount={noteCount} setMatrix={_setMatrix} />
            <ClearHarmonics noteCount={noteCount} setMatrix={_setMatrix} />
        </Btns>
    );
};

export default Buttons;

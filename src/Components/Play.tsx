import React from 'react';
import styled from 'styled-components';
import { PolySynth } from 'tone';

type Props = {
    matrix: number[];
    synth: PolySynth | null;
};

const Btn = styled.button`
    width: 50px;
    height: 50px;
`;

const Play = ({ matrix, synth }: Props) => {
    const btnRef = React.useRef<HTMLButtonElement | null>(null);

    const handleClick = React.useCallback(() => {
        const count = matrix.filter((item, i) => item).length;
        if (synth) {
            matrix.forEach((on, i) => {
                if (on)
                    synth.triggerAttackRelease(
                        200 * (i + 1),
                        '16n',
                        undefined,
                        1 / count,
                    );
            });
        }
        if (btnRef.current) {
            btnRef.current.classList.add('playing');
            setTimeout(() => {
                if (btnRef.current) btnRef.current.classList.remove('playing');
            }, 500);
        }
    }, [matrix, synth]);

    return (
        <Btn ref={btnRef} onClick={handleClick}>
            Play
        </Btn>
    );
};

export default Play;

import React from 'react';
import styled from 'styled-components';
import { PolySynth } from 'tone';

type Props = {
    id: number;
    synth: PolySynth | null;
    active: number;
    setMatrix: (n: number, on: boolean) => void;
};

const Btn = styled.button`
    width: 100px;
    height: 100px;
    background: #222;
    border-radius: 0;
    border: 1px solid #000;
    color: #fff;
    position: relative;
    transition: all 0.2s;
    &.active {
        background: red;
    }
    &:focus {
        outline: 0;
        border: 0;
    }
    &:before {
        content: '';
        transition: all 0.2s;
        width: 1px;
        opacity: 0;
        height: 1px;
        left: 50%;
        top: 50%;
        position: absolute;
        display: block;
        box-shadow: 0px 0px 19px 40px rgba(255, 220, 150, 1);
    }
    &.playing {
        &:before {
            opacity: 1;
        }
    }
`;

const Button = ({ active, setMatrix, id, synth }: Props) => {
    const btnRef = React.useRef<HTMLButtonElement | null>(null);
    const handleClick = React.useCallback(() => {
        if (synth) synth.triggerAttackRelease(200 * (id + 1), '8n');
        if (btnRef.current) {
            btnRef.current.classList.add('playing');
            setTimeout(() => {
                if (btnRef.current) btnRef.current.classList.remove('playing');
            }, 500);
            setMatrix(id, !active);
        }
    }, [active, setMatrix, id, synth]);
    return (
        <Btn
            className={active ? 'active' : ''}
            ref={btnRef}
            onClick={handleClick}
        />
    );
};

export default Button;

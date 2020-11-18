import React from 'react';
import styled from 'styled-components';
import { Synth } from 'tone';

type Props = {
    id: number;
    synth: Synth | null;
};

const Btn = styled.button`
    width: 100px;
    height: 100px;
    background: #222;
    border-radius: 0;
    border: 1px solid #000;
    color: #fff;
`;

const Button = ({ id, synth }: Props) => {
    const handleClick = React.useCallback(() => {
        if (synth) synth.triggerAttackRelease(200 * (id + 1), '8n');
    }, [synth]);
    return <Btn onClick={handleClick} />;
};

export default Button;

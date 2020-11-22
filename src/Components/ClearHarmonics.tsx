import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    width: 50px;
    height: 50px;
`;

type Props = {
    noteCount: number;
    setMatrix: (matrix: number[]) => void;
};

const ClearHarmonics = ({ noteCount, setMatrix }: Props) => {
    return (
        <Btn onClick={() => setMatrix(new Array(noteCount).fill(0))}>Clear</Btn>
    );
};

export default ClearHarmonics;

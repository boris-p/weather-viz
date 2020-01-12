/** @jsx jsx */

import React from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

const style = css`
  color: hotpink;
`;

const anotherStyle = css({
    textDecoration: 'underline'
});

const PinkButton = styled.button`
  color: hotpink;
`;


const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
);

const EmotionExperiments: React.FC = () => {
    return (
        <React.Fragment>
                Emotion Expperiments
                <div css={style}>
                    Some hotpink text
                </div>
                <AnotherComponent/>
                <PinkButton>This is a hotpink button.</PinkButton>
        </React.Fragment>
    );
};

export default EmotionExperiments;

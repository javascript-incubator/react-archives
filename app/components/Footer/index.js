import React from 'react';
import LittleNasaIcon from './nasacredits';
import styled from 'styled-components';

const FullBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  padding: 20px;
  align-self: stretch;
`;

const NasaCredits = styled.span`
  color: #fcfcfc;
  font-size: 24px;
`;

function AppFooter() {
  return (
    <FullBox>
      <NasaCredits>
        Powered by {<LittleNasaIcon />}
      </NasaCredits>
      <NasaCredits>
        Made with 💖
      </NasaCredits>
    </FullBox>
  );
}

export default AppFooter;

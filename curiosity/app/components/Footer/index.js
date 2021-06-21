import React from 'react';
import styled from 'styled-components';
import LittleNasaIcon from './nasacredits';

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

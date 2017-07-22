import styled from 'styled-components';

export const FullBox = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
  justify-content: center;
`;

export const MainHeading = styled.h1`
  z-index: 2;
  font-size: 36px;
  color: #fcfcfc;
  font-weight: 800;
  padding: 30px !important;
  font-family: 'Kelly Slab', cursive !important;
  letter-spacing: 8px;
  text-transform: uppercase;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;

export const AboveStarsImage = styled.img`
  z-index: 2;
  height: 200px;
`;

export const ReconImage = styled.img`
  z-index: 3;
  height: 30px;
  margin-left: 190px;
`;

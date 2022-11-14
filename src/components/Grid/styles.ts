import styled from 'styled-components';

import { COLORS, GRID_RESOLUTION } from '../../consts';

export const StyledGrid = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-template-rows: repeat(${GRID_RESOLUTION}, minmax(0, 1fr));
  height: 90vh;
  min-height: 30rem;
  flex-grow: 1;
  align-self: center;
  margin: 0.5rem 0;
  background: linear-gradient(
    180deg,
    ${COLORS.lines} 0,
    ${COLORS.lines} 1px,
    ${COLORS.white} 1px,
    ${COLORS.white} 100%
  );
  background-size: 4.16% 4.16%;
`;

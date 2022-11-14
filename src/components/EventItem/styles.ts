import styled from 'styled-components';

import { COLORS, GRID_RESOLUTION } from '../../consts';

type BlockProps = {
  $start: number;
  $end: number;
};

const StyledSharedBlock = styled.div`
  background: ${COLORS.backgroundPrimaryRGBA};
  background: linear-gradient(
    90deg,
    ${COLORS.backgroundPrimary} 0,
    ${COLORS.backgroundPrimary} 6px,
    ${COLORS.backgroundPrimaryRGBA} 6px,
    ${COLORS.backgroundPrimaryRGBA} 100%
  );
  border-radius: 0.5rem;
  margin: 0.125rem;
  padding: 0.325rem 0.625rem;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 300;
  color: ${COLORS.textPrimary};
  white-space: nowrap;
  min-height: 2.8125rem;

  & h3 {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledBlock = styled(StyledSharedBlock)<BlockProps>`
  grid-row-start: ${({ $start }) => Math.min(GRID_RESOLUTION, $start + 1)};
  grid-row-end: ${({ $end }) => Math.min(GRID_RESOLUTION, $end + 1)};
`;

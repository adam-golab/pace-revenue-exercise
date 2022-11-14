import styled from 'styled-components';

import { COLORS } from '../../consts';

export const StyledContainer = styled.div`
  margin: 2rem;
  display: flex;
  align-items: stretch;
`;

export const StyledHoursList = styled.ul`
  list-style: none;
  margin: 0 1rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 300;
  color: ${COLORS.textSecondary};

  &:li {
    margin: 0;
    padding: 0;
  }
`;

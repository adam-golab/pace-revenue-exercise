import { FC } from 'react';

import { Grid } from '../Grid';
import { Event } from '../../types';

import { HOURS } from './consts';
import { StyledContainer, StyledHoursList } from './styles';

type Props = {
  events: Event[];
};

export const DayView: FC<Props> = ({ events }) => (
  <StyledContainer>
    <StyledHoursList>
      {HOURS.map((hour) => (
        <li key={hour}>{hour}</li>
      ))}
    </StyledHoursList>
    <Grid events={events} />
  </StyledContainer>
);

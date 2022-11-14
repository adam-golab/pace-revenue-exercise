import { FC } from 'react';

import { convertMinutesToHours } from '../../helpers';
import { GRID_RESOLUTION, MINUTES_IN_DAY } from '../../consts';
import { Event } from '../../types';

import { StyledBlock } from './styles';

type Props = {
  event: Event;
  minHeight: number;
};

const GRID_FACTOR = MINUTES_IN_DAY / GRID_RESOLUTION;

export const EventItem: FC<Props> = ({ event, minHeight }) => {
  const startTime = convertMinutesToHours(event.start);
  const endTime = convertMinutesToHours(event.end);

  return (
    <StyledBlock
      $start={Math.round(event.start / GRID_FACTOR)}
      $end={Math.max(Math.round(event.end / GRID_FACTOR), Math.round(event.start / GRID_FACTOR) + minHeight)}
      title={`${startTime}-${endTime} ${event.title}`}
    >
      <div>{startTime}</div>
      <h3>{event.title}</h3>
    </StyledBlock>
  );
};

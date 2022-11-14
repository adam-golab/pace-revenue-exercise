import { FC } from 'react';

import { EventItem } from '../EventItem';
import { Event } from '../../types';

import { StyledGrid } from './styles';
import { useGridMinHeight } from '../../hooks';

type Props = {
  events: Event[];
};

export const Grid: FC<Props> = ({ events }) => {
  const { gridRef, minHeight } = useGridMinHeight();

  return (
    <StyledGrid ref={gridRef}>
      {events.map((event) => (
        <EventItem event={event} minHeight={minHeight} key={event.id} />
      ))}
    </StyledGrid>
  );
};

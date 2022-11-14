import { GRID_RESOLUTION } from '../consts';

const MINUTES_IN_HOUR = 60;
const MINIMAL_EVENT_ITEM_HEIGHT_IN_REM = 3.375;

export const formatHour = (value: number): string => String(value).padStart(2, '0');

export const convertMinutesToHours = (minutes: number): string =>
  `${formatHour(Math.floor(minutes / MINUTES_IN_HOUR))}:${formatHour(minutes % MINUTES_IN_HOUR)}`;

export const calculateMinHeight = (gridHeight: number, html: Document = document): number =>
  Math.round(
    (parseFloat(getComputedStyle(html.documentElement).fontSize) * MINIMAL_EVENT_ITEM_HEIGHT_IN_REM) /
      (gridHeight / GRID_RESOLUTION),
  );

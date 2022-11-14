import { formatHour } from '../../helpers';

const HOURS_TO_DISPLAY = 25;

export const HOURS = Array.apply(null, new Array(HOURS_TO_DISPLAY)).map((_, index) => `${formatHour(index)}:00`);

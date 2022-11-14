import useSWR from 'swr';

import { Event } from '../types';

type ApiResponse = {
  events: Event[];
};

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export const useAPI = () => useSWR<ApiResponse>('{ events { id, title, start, end } }', fetcher);

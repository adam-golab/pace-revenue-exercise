import { useAPI } from '../src/hooks';

export default function Index() {
  const { data, error } = useAPI();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  return (
    <div>
      {events.map((event) => (
        <>
          <div>{event.title}</div>
          <div>
            {event.start} - {event.end}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}

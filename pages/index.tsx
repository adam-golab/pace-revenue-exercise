import { DayView } from '../src/components/DayView';
import { useAPI } from '../src/hooks';

export default function Index() {
  const { data, error } = useAPI();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  return (
    <div>
      <DayView events={events} />
    </div>
  );
}

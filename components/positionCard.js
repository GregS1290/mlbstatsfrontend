const PositionCard = ({ player }) => {
  const { name_display_first_last, avg, obp, ops, h, hr } = player;

  return (
    <>
      <h2>{name_display_first_last}</h2>
      <div>Avg: {avg}</div>
      <div>Obp: {obp}</div>
      <div>Ops: {ops}</div>
      <div>Hits: {h}</div>
      <div>hr: {hr}</div>
    </>
  );
};

const PositionCard = ({ player }) => {
  const { name_display_first_last, era, ip, so, bb, whip } = player;

  return (
    <>
      <h2>{name_display_first_last}</h2>
      <div>Era: {era}</div>
      <div>Innings: {ip}</div>
      <div>Strikeouts: {so}</div>
      <div>Walks: {bb}</div>
      <div>WHIP: {whip}</div>
    </>
  );
};

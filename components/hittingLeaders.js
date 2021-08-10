import PositionCard from './positionCard';

function HittingLeaders({ hittingLeaders }) {
  return (
    <>
      <h2>HittingLeaders:</h2>
      {hittingLeaders.map((player) => (
        <PositionCard key={player_id} player={player} />
      ))}
    </>
  );
}

export default HittingLeaders;

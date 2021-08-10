import PitcherCard from '../components/pitcherCard';

const PitchingLeaders = ({ pitchingdata }) => {
  return (
    <>
      <h2>Pitching Leaders:</h2>
      <div>
        {data.map((pitcher) => (
          <PitcherCard player={pitcher} key={pitcher.player_id} />
        ))}
      </div>
    </>
  );
};

export default PitchingLeaders;

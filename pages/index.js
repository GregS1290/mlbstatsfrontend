import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css'
import {
  alEast,
  alCentral,
  alWest,
  nlEast,
  nlCentral,
  nlWest,
} from '../assets/teamdata';
import HittingLeaders from '../components/hittingLeaders';
import PitchingLeaders from '../components/pitchingLeaders';

export default function Home() {
  return (
    <>
      <Head>
        <title>MLB Stats</title>
      </Head>
      <main>
        <div>
          <HittingLeaders />
        </div>
        <div>
          <PitchingLeaders />
        </div>
      </main>
    </>
  );
}

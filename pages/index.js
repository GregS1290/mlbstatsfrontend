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
import { gql } from '@apollo/client';
import client from '../apollo-client';

export default function Home({ hittingLeaders }) {
  console.log(hittingLeaders);
  return (
    <>
      <Head>
        <title>MLB Stats</title>
      </Head>
      <main>
        <div>
          <HittingLeaders hittingLeaders={hittingLeaders} />
        </div>
        <div>
          <PitchingLeaders />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getHittingLeaders {
        name_display_first_last
        player_id
        avg
        obp
        ops
        h
        hr
      }
    `,
  });

  return {
    props: {
      hittingLeaders: data.getHittingLeaders.slice(0, 6),
    },
  };
}

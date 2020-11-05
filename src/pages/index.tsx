import Head from 'next/head';
import { Container } from '../styles/pages/Home';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches {
      mission_name
      launch_year
      rocket {
        rocket_name
      }
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>ReactJS Structure world!</h1>
      <p>A reactJS + Next.js structure</p>
    </Container>
  );
};

export default Home;

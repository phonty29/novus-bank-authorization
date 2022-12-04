import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import PrimaryLayout from '../components/layout/primary/PrimaryLayout';
import clientPromise from '../lib/mongodb';
import { NextPageWithLayout } from './page';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    await clientPromise
    return {
      props: { isConnected: true },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { isConnected: false },
    };
  }
}

const Home: NextPageWithLayout = ({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        {isConnected ? "You're connected to MongoDB" : "You are NOT connected to MongoDB"}
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};

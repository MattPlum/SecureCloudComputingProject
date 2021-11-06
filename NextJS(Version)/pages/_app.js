import 'tailwindcss/tailwind.css';
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import {  getSession} from "next-auth/client";
import {Provider} from "next-auth/client";
import "../styles.css";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
  <>
  <Head>
    <link
     href="https://fonts.googleapis.com/icon?family=Material+Icons"
     rel="stylesheet"
    />
  </Head>
  <Provider session={session}>
  <Component {...pageProps} />
  </Provider>
  </>
  )
  
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

export default MyApp

export default function Home() {
  return {
    props: {},
  };
}

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/search',
      permanent: false,
    },
  };
}
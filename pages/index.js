export default function Index() {
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
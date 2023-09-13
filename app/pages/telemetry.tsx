const IndexPage = (props) => {
  return <div>Leaptable hasn't implemented telemetry collection yet 🙂!</div>;
};

export async function getServerSideProps({ req, res }) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default IndexPage;

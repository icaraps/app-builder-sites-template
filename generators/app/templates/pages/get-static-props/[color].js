import colors from "../../data/colors";

export default ({ color }) => <h1 style={{color: color?.hex}}>{color?.name}</h1>

export async function getStaticPaths() {
  return {
    paths: colors.map(({name}) => ({
      params: {color: name}
    })),
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps({params}) {
  const color = colors.find(({name}) => name === params.color);
  
  if (color) {
    return { props: { color } }
  }
  else {
    return { notFound: true }
  }
}
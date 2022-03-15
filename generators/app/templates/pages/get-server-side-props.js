export default function Index({ date}) {
  return (
    <>
      <h2>The Date is : {date}</h2>
      <p>This page is fully Server Side Rendered.</p>
      <p>Refresh the page to get the current date retrieved by the server.</p>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      date: new Date().toString(),
    }
  }
}

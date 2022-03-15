import Link from 'components/Link'

export default () => (
  <>
    <h1>Index {process.env.NAME}</h1>
  
    List of all demos
  
    <h2>Basics</h2>
    <ol>
      <li>
        <Link href="/get-server-side-props">
          <a>getServerSideProps</a>
        </Link>
      </li>
      <li>
        <Link href="/get-static-props">
          <a>getStaticProps</a>
        </Link>
      </li>
      <li>
        <Link href="/aem-graphql">
          <a>AEM Headless API + WKDN content</a>
        </Link>
      </li>
    </ol>
  </>
)
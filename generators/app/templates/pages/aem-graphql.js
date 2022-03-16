import AEMHeadless from '@adobe/aem-headless-client-js';
import Image from 'next/image'

export default ({adventures, ASSETS_SERVER}) => {
  const items = adventures?.data?.adventureList?.items;
  
  if (!items?.length) {
    return <h1>No adventures</h1>
  }
  
  return items.map(({_path, adventureTitle, adventureDescription, adventurePrimaryImage}) => (
    <div key={_path}>
      <h1>{adventureTitle}</h1>
      <Image
        unoptimized={true}
        alt={adventureTitle}
        src={`${ASSETS_SERVER}${adventurePrimaryImage._path}`}
        height={300}
        width={500}
      />
      <p>{adventureDescription.plaintext}</p>
    </div>
  ))
}

export async function getServerSideProps() {
  const serviceURL = process.env.AEM_HOST;
  const endpoint = process.env.AEM_GRAPHQL;
  const GQLServer = `${serviceURL}${endpoint}`;
  
  const aemHeadlessClient = new AEMHeadless({
    serviceURL,
    endpoint,
    fetch
  });
  
  const query = `{
    adventureList {
      items {
        _path
        adventureTitle
        adventureDescription {
          plaintext
        }
        adventurePrimaryImage {
          ... on ImageRef {
            _path
          }
        }
      }
    }
  }`;
  
  console.log(`Executing ${query} on ${GQLServer}`);
  const res = await aemHeadlessClient.runQuery(query);
  
  return {
    props: {
      adventures: res,
      ASSETS_SERVER: serviceURL
    },
  };
}


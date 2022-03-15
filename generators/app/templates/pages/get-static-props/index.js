import Link from 'components/Link';
import colors from "../../data/colors";

export default () => (
  <main>
    <ul>
    {colors.map(({name}) => (
      <li key={name}>
        <Link href={`/get-static-props/${name}`}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
    </ul>
  </main>
)
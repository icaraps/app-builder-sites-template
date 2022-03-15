import Link from 'next/link'
import { useRouter } from 'next/router'

const RT_PATH = '/api/v1/web/actions/pages';
export default ({children, href = '', ...props}) => {
  const router = useRouter();
  
  // Until https://jira.corp.adobe.com/browse/ACNA-1497 is fixed
  if (!href.startsWith(RT_PATH) && router.asPath.startsWith('/api/v1/web/actions/pages')) {
    href = `/api/v1/web/actions/pages${href}`;
  }
  
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  )
}
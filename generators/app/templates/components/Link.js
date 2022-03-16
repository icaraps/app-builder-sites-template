import Link from 'next/link'

// Until https://jira.corp.adobe.com/browse/ACNA-1497 is fixed
export default ({children, href = '', ...props}) => {
  return (
    <Link href={process.env.NODE_ENV === 'production' ? `/api/v1/web/actions/pages${href}` : href} {...props}>
      {children}
    </Link>
  )
}

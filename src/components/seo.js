import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            {/* <meta name="description" content="Your description" /> */}
            <title>{title} | {data.site.siteMetadata.title}</title>
        </>
    )
}

export default Seo
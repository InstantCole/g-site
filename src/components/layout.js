import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as layoutStyle from './layout.module.sass'


const Layout = ({ pageTitle, children }) => {
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
    <main className={layoutStyle.mainContainer}>
      <title>{pageTitle}</title>
      <div>{data.site.siteMetadata.title}</div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      <img alt="test" src=""></img>
      {children}
    </main>
  )
}

export default Layout
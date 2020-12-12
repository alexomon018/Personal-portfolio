import React from 'react'
import { Helmet } from 'react-helmet-async'
function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: 'Aleksa Mitic | Home',
  description: 'Aleksa Mitic Portfolio Web Development',
  keywords: ' React JS Node FullStack',
}
export default Meta

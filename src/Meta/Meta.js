import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
const metaDecorator = require('../Data/metaDecorator.json')
function Meta({ title, description, imageUrl, imageAlt }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta name='description' content={description} />
      <meta property='og:image' content={metaDecorator.hostname + imageUrl} />
      <meta
        property='og:url'
        content={
          metaDecorator.hostname +
          window.location.pathname +
          window.location.search
        }
      />
      <meta name='twitter:card' content='summary_large_image' />

      <meta property='og:site_name' content='European Travel, Inc.' />
      <meta name='twitter:image:alt' content={imageAlt} />
    </Helmet>
  )
}
Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}
export default Meta

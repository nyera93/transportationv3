import React from 'react'
import CareerItem from './blog/CareerItem'

import PageHeader from './../components/PageHeader'
import PageContent from './../components/PageContent'
import Layout from './Layout'

class Administration extends React.Component {


  render() {
    return (
      <Layout>
      <div>
      <PageHeader color="is-info" title="Careers / Administration">
  </PageHeader>
        <br/>

          <CareerItem title="Administration"/>

      </div>
      <br />
        <br />
      </Layout>
    )
  }
  }
export default Administration

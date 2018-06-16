import React from 'react'
import CareerItem from './blog/CareerItem'
import PageHeader from './../components/PageHeader'
import PageContent from './../components/PageContent'
import Layout from './Layout'

class Mechanic extends React.Component {

  render() {
    return (
      <Layout>
      <div>
      <PageHeader color="is-info" title="Careers / Mechanics">
  </PageHeader>
        <br/>

            <CareerItem title="Mechanics" />

      </div>
      <br />
      <br />
      </Layout>
    )
  }
  }
export default Mechanic

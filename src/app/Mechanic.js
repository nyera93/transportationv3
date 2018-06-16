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
  Your standard <strong>JavaScript</strong> programming Career, albeit, probably not very good, but I will at least try to keep it entertaining. This Career is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
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

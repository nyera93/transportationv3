import React from 'react'
import { NavLink } from 'react-router-dom'
import CareerItem from './career/CareerItem'
import PageHeader from './../components/PageHeader'
import PageContent from './../components/PageContent'
import Layout from './Layout.js'

class Career extends React.Component {

  render() {
    return (
      <Layout>
      <div>
      <PageHeader color="is-info" title="Careers / Drivers">
    </PageHeader>
        <br/>
        <CareerItem title="Drivers"/>
      </div>
        <br/>
        <br/>
      </Layout>
    )
  }
}
export default Career

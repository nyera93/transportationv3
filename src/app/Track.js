import React from 'react'
import Header from './layout/Header'
import PageHeader from './../components/PageHeader'
import Layout from './Layout'

class Track extends React.Component {
  render() {
    return (
      <Layout>
      <div>
      <PageHeader color="is-info" title="Track">
      </PageHeader>
        <br/>
      </div>
      </Layout>
    )
  }
}
export default Track

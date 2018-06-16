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
      Your standard <strong>JavaScript</strong> programming blog, albeit, probably not very good, but I will at least try to keep it entertaining. This blog is a chronological mix of random posts on Angular, React, Functional Programming, and my <strong>project walkthroughs</strong>.
      </PageHeader>
        <br/>
      </div>
      </Layout>
    )
  }
}
export default Track

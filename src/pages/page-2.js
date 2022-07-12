import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Put some stuff here</h1>
    <p>Generate some content to put here. Anything really.</p>
    <iframe src="https://grendelsson.github.io/content/test.html">
    </iframe>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

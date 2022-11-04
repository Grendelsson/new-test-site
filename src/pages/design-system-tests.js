import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav"
import { Link } from "gatsby"

const DesignSystemTest = () => (
  <Layout>
    <Seo title="Design System tracking tests" />
    <StackedNav label="Explore our site" elementType="h2">
        <StackedNavLink to="#about">About Page</StackedNavLink>
        <StackedNavLink to="#contact">Contact Page</StackedNavLink>
    </StackedNav>

    <StackedNav
        label="Explore our site"
        elementType="h3"
        link={{ destination: "#sitemap", isCurrent: true, elementType: Link }}
    >
        <StackedNavLink to="#about" label="About Page"/>
        <StackedNavLink to="#contact" label="Contact Page"/>
    </StackedNav>
  </Layout>
)

export default DesignSystemTest
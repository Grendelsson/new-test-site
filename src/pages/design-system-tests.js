import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav"
import { Link } from "gatsby"

const setOfLinksToNest = (
  <>
		<StackedNavLink hint="hint text" to="#link-one" data-text="Nested link one" data-level="2" >Nested link one</StackedNavLink>
		<StackedNavLink to="#link-two"
			nested={
				<StackedNavLink hint="hint text" data-text="Deep nested link" to="#deep">Deep nested link</StackedNavLink>
			}
      data-level="2" 
		>
			Nested link two
		</StackedNavLink>
  </>
);

const DesignSystemTest = () => (
  <Layout>
    <Seo title="Design System tracking tests" />
    <StackedNav
        data-component="stacked-nav"
        label="Explore our site"
        elementType="h3"
        link={{ destination: "#sitemap", isCurrent: true, elementType: Link }}
        >
        <StackedNavLink data-level="1" to="#" nested={setOfLinksToNest}>
          Stacked nav stuff 
        </StackedNavLink>
        <StackedNavLink data-level="1" to="#about" data-text="About Page" label="About Page"/>
        <StackedNavLink data-level="1" to="#contact" data-text="Contact Page" label="Contact Page"/>
        
    </StackedNav>
  </Layout>
)

export default DesignSystemTest
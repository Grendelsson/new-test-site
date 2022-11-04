import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav"
import { Link } from "gatsby"

const setOfLinksToNest = (
  <>
		<StackedNavLink hint="hint text" to="#link-one">Nested link one</StackedNavLink>
		<StackedNavLink to="#link-two"
			nested={
				<StackedNavLink hint="hint text" to="#deep">Deep nested link</StackedNavLink>
			}
		>
			Nested link two
		</StackedNavLink>
  </>
);

const DesignSystemTest = () => (
  <Layout>
    <Seo title="Design System tracking tests" />
    <StackedNav
        label="Explore our site"
        elementType="h3"
        link={{ destination: "#sitemap", isCurrent: true, elementType: Link }}
        >
      <StackedNavLink to="#" nested={setOfLinksToNest}>
        Stacked nav stuff 
    </StackedNavLink>
        <StackedNavLink to="#about" label="About Page"/>
        <StackedNavLink to="#contact" label="Contact Page"/>
        
    </StackedNav>
  </Layout>
)

export default DesignSystemTest
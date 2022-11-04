import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StackedNav, StackedNavLink } from "@nice-digital/nds-stacked-nav"
import { Link } from "gatsby"
import {
	FilterSummary,
	FilterPanel,
	FilterGroup,
	FilterOption,
	FilterByInput
} from "@nice-digital/nds-filters";

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

const onChanged = () => {
  console.log("onchanged");
}

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
    <FilterPanel data-component="filter-panel">
      <FilterGroup heading="Group" data-level="1" id="ProductType">
        <FilterByInput>
        </FilterByInput>
        <FilterOption  data-level="2" data-text="Hello" isSelected={true} onChanged={onChanged}>
          Hello
        </FilterOption>
        <FilterOption  data-level="2" data-text="There" isSelected={true} onChanged={onChanged}>
          There
        </FilterOption>
      </FilterGroup>
      <FilterGroup heading="Group" data-level="1" id="ProductType">
        <FilterOption data-level="2" data-text="option 3" isSelected={true} onChanged={onChanged}>
          option 3
        </FilterOption>
        <FilterOption data-level="2" data-text="option 4" isSelected={true} onChanged={onChanged}>
          option 4
        </FilterOption>
      </FilterGroup>
    </FilterPanel>
  </Layout>
)

export default DesignSystemTest
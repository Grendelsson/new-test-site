import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"


const DesignSystemTest = () => (
  <Layout>
    <Seo title="404: Not found" />
    <nav class="stacked-nav" data-component="stacked-nav">
        <ul class="stacked-nav__list">
            <li class="stacked-nav__list-item">
            <a aria-current="false" data-level={1} data-text="top level" href="#">
                <span class="stacked-nav__content-wrapper">Top level</span>
            </a>
            <ul class="stacked-nav__nested">
                <li class="stacked-nav__list-item">
                <a aria-current="false" data-level={2} data-text="nested link one" href="#">
                    <span class="stacked-nav__content-wrapper">
                    Nested link one
                    <span class="stacked-nav__hint">hint text</span>
                    </span>
                </a>
                </li>
                <li class="stacked-nav__list-item">
                <a aria-current="false" data-level={2} data-text="nested link two" href="#">
                    <span class="stacked-nav__content-wrapper">Nested link two</span>
                </a>
                <ul class="stacked-nav__nested">
                    <li class="stacked-nav__list-item">
                    <a aria-current="false" data-level={3} data-text="deep nested link" href="#">
                        <span class="stacked-nav__content-wrapper">
                        Deep nested link
                        <span class="stacked-nav__hint">hint text</span>
                        </span>
                    </a>
                    </li>
                </ul>
                </li>
            </ul>
            </li>
        </ul>
        </nav>
  </Layout>
)

export default DesignSystemTest
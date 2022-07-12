import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


export default function SecondPage(){
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      var eventMethod = window.addEventListener? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod === "attachEvent"? "onmessage" : "message";
      eventer(messageEvent, function (e) {
      //data you receive from parent is stored inside e.data
          window.dataLayer.push(e.data);
      });
  }
  }, []);
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Put some stuff here</h1>
      <p>Generate some content to put here. Anything really.</p>
      <iframe src="https://grendelsson.github.io/content/test.html" title="iframe_for_test">
      </iframe>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)};

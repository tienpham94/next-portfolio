import Link from "next/link"

import Layout from "../components/Layout"

const About = () => (
  <Layout title="About">
    <div>
      <Link href="/">
        <a>Go to home</a>
      </Link>
      <p>A JS programmer</p>
      <img src="/static/js.png" alt="JS" height="200px" />
    </div>
  </Layout>
)

export default About

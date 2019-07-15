import Link from "next/link"

const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>A JS programmer</p>
    <img src="/static/js.png" alt="JS" height="200px" />
  </div>
)

export default About

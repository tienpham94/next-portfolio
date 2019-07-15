import Link from "next/link"
import Layout from "../components/Layout"

// OUT OF THE BOX: HOT RELOADING

const Index = () => (
  <Layout title="Home">
    <div>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
      <p>Welcome to the home page</p>
    </div>
  </Layout>
)

export default Index

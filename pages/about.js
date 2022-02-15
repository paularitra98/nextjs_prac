import Head from 'next/head'
import Menu from './Menu' 

export default function About() {
  return (
    <div>
      <Head>
        <title>About us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Menu/>
        <h1>About page</h1>
      </div>

      
    </div>
  )
}

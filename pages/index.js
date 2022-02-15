import Head from 'next/head'
import Menu from './Menu' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Menu/>
        <h1>Home Page</h1>
      </div>

      
    </div>
  )
}

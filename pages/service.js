import Head from 'next/head'
import Menu from './Menu' 

export default function Service() {
  return (
    <div>
      <Head>
        <title>Service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Menu/>
        <h1>Service page</h1>
      </div>

      
    </div>
  )
}

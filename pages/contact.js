import Head from 'next/head'
import Menu from './Menu' 


export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact us</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <div>
        <Menu/>
        <h1>Contact page</h1>
      </div>

      
    </div>
  )
}

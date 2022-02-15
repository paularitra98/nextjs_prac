import Head from 'next/head'
import Link from 'next/link'

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Contact us</title>
        <link rel="icon" href="/favicon.ico" />

           <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        
      </Head>
      <div>
        
        <nav className="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link href="/">
      <a className="nav-link" >Home</a>
    </Link>
    </li>
    <li className="nav-item">
      <Link href="/about">
      <a className="nav-link" >About us</a>
    </Link>
    </li>
    <li className="nav-item">
      <Link href="/service">
      <a className="nav-link">Service</a>
    </Link>
  </li>
    <li className="nav-item">
       <Link href="/contact">
      <a className="nav-link">Contact</a>
    </Link>
    </li>
  </ul>
</nav>

      </div>

      
    </div>
  )
}

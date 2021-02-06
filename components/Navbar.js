import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.main}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/feed/1">
        <a>Feed</a>
      </Link>

      <Link href="/eom">
        <a>EOM</a>
      </Link>
    </div>
  )
}

export default Navbar

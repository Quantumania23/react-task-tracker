import {Link} from 'react-router-dom'

const Footer = () =>  {
  return (
    <footer>
      <p>Mike's Copyright &copy; 2023</p>
      <Link to ='/about'>
        About
      </Link>
    </footer>
  )
}

export default Footer

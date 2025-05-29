import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around p-2">
      <Link to="/">🏠</Link>
      <Link to="/explore">🔍</Link>
      <Link to="/profile">👤</Link>
    </nav>
  )
}

export default Navbar
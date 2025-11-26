import { Link, useLocation } from "react-router-dom";
import FindLocation from "./FindLocation";
import { useState } from "react";

export default function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    return isActive(path) 
      ? "font-bold text-primary border-b-2 border-primary" 
      : "hover:text-primary transition-colors";
  };

  const getMobileLinkClass = (path) => {
    return isActive(path) ? 'active' : '';
  };

  return (<>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <button 
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <a className="text-xl font-bold">Ople</a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/" className={getLinkClass('/')}>Home</Link></li>
            <li><Link to="/forecast" className={getLinkClass('/forecast')}>Forecast</Link></li>
            <li><Link to="/bookmarks" className={getLinkClass('/bookmarks')}>Bookmark</Link></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <FindLocation/>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div 
            className="static inset-0 lg:hidden z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative lg:hidden bg-base-100 shadow-lg border-t border-base-200 z-20">
            <ul className="menu menu-vertical w-full p-4">
            <li>
              <Link 
                to="/" 
                className={getMobileLinkClass('/')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/forecast" 
                className={getMobileLinkClass('/forecast')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Forecast
              </Link>
            </li>
            <li>
              <Link 
                to="/bookmarks" 
                className={getMobileLinkClass('/bookmarks')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bookmark
              </Link>
            </li>
          </ul>
        </div></>
      )}
    </>
  );
}
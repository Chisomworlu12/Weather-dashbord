import { Link, useLocation } from "react-router-dom";
import FindLocation from "./FindLocation";
import { useState, useEffect } from "react";

export default function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    return isActive(path) 
      ? "font-bold text-primary border-b-2 border-primary" 
      : "hover:text-primary transition-colors";
  };

  const getMobileLinkClass = (path) => {
    return isActive(path) ? 'active' : '';
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <button 
            className="btn btn-ghost lg:hidden mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {!isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
              </svg>
            )}
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
        
        <div className="navbar-end gap-2">
         
          <button 
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            )}
          </button>
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
          </div>
        </>
      )}
    </>
  );
}
export default function SearchIcon  ({ size = 24, className = "" }) {
    return(
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24"
    className={className}
  >
    <path 
      fill="none" 
      stroke="currentColor" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeMiterlimit="10" 
      strokeWidth="1.5" 
      d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
    />
  </svg>)};
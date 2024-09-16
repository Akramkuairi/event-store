import { NavLink } from "react-router-dom"
import { logo } from "../../../public/resources/resources"
import { NavMenu } from "../../Menus"



const NavBar = () => {
  


  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  bg-transparent text-sm py-2  max-w-[85rem] mx-auto px-0 ">
  <nav className='container w-full mx-auto px-4 py-2 md:px-6 lg:px-8 rounded-xl' aria-label="Global"  >
    <div className="relative sm:flex sm:items-center">
      <div className="flex items-center justify-between">
      <NavLink className="inline-flex items-center gap-x-2 text-md sm:text-xs md:text-md " to="/">
      <img src={logo} className="w-12 sm:w-8 md:w-12" alt="logo" />
      <span className=" uppercase  text-secondaryText  font-black">florian <span className="text-orangeLogo">kalsi </span> <br /> automatenvermietung</span>
      </NavLink>
        <div className="sm:hidden">
          <button type="button" className="hs-collapse-toggle p-3 inline-flex justify-center items-center gap-x-2  border border-yellowLogo  bg-yellowLogo text-gray-600 hover:text-gray-100 shadow-sm hover:bg-redLogo hover:border-redLogo hover:transition-all duration-700  hover:scale-105 disabled:opacity-50 disabled:pointer-events-none  rounded-full  " data-hs-collapse="#navbar-hover-event" aria-controls="navbar-hover-event" aria-label="Toggle navigation">
            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div id="navbar-hover-event" className='   transition-all duration-300 basis-full grow sm:block'  >
    <NavMenu />
      </div>
    </div>
  </nav>
</header>
  )
}

export default NavBar
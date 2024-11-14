import Link from "next/link";
import styles from "../styles/Header.module.css";
const Header1 = () => {
  return (
    <>
     
          <div className="navbar bg-base-100 mr-0 bg-opacity-0">
            <div className="flex-1">
              <Link href="/" className="btn btn-ghost text-xl">
                Education
              </Link>
            </div>
            <div className="flex-none gap-2">
              <Link href="#main-feature"  className="btn btn-ghost text-xl">
                Main Feature
              </Link>
              <Link href="#Explore" className="btn btn-ghost text-xl">
               Explore
              </Link>
              <Link href="#courses" className="btn btn-ghost text-xl">
                courses
              </Link>
              <Link href="" className="btn btn-ghost text-xl">
                Blog
              </Link>
              <Link href="" className="btn btn-ghost text-xl">
                Contact
              </Link>
            </div>
            <div className="flex-none gap-2">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              </label>
              <div className={styles.deco}>
                <div className={styles.nav}>
                  <div className="dropdown dropdown-end">
                    <Link href="/signin"  className="btn btn-ghost glass text-xl">Login</Link>
                    {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                            
                              />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                          <li>
                            <a className="justify-between">
                              Profile
                              <span className="badge">New</span>
                            </a>
                          </li>
                          <li><a>Settings</a></li>
                          <li><a>Logout</a></li>
                        </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
     
    </>
  );
};

export default Header1;

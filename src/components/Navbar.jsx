import { useState } from 'react';
import { logo } from '../assets/index';
import { navLinks } from '../constants/index';
import { HiOutlineX } from 'react-icons/hi';
import { CgMenuLeft } from 'react-icons/cg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full justify-between">
      <img className="h-[5rem] w-[10rem]" src={logo} alt="logo" />

      <ul className="hidden items-center text-slate-50 md:flex">
        {navLinks.map((nav, index) => {
          return (
            <li key={index} className={index === 3 ? 'mr-1' : 'mr-10'}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-end object-fill text-slate-50 md:hidden">
        <button className="text-4xl" onClick={() => setIsOpen((s) => !s)}>
          {!isOpen ? <CgMenuLeft /> : <HiOutlineX />}
        </button>
        <div
          className={`${isOpen ? 'flex' : 'hidden'} sidebar bg-black-gradient absolute right-0 top-20 mx-6 my-2 rounded-lg p-8`}
        >
          <ul className="items-center text-slate-50">
            {navLinks.map((nav, index) => {
              return (
                <li
                  onClick={() => setIsOpen(false)}
                  key={index}
                  className={index === 3 ? 'mr-1' : 'mr-10'}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

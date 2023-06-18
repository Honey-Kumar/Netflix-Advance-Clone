import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="p-20 bg-slate-950">
      <p className="pt-8">Questions? Call 000-800-919-1694</p>
      <div className="flex  justify-between items-center flex-wrap">
        <ul className="pb-10 pt-10  max-sm:pb-4 max-sm:pt-4 flex flex-col gap-4">
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Media Centre</Link>
          </li>
          <li>
            <Link to="/">ways to watch</Link>
          </li>
          <li>
            <Link to="/">Cookie Preferences</Link>
          </li>
          <li>
            <Link to="/">Speed Test</Link>
          </li>
        </ul>
        <ul className="pb-10 pt-10 max-sm:pb-4 max-sm:pt-4 flex flex-col gap-4">
          <li>
            <Link to="/">Help Centre</Link>
          </li>
          <li>
            <Link to="/">Investor Relations</Link>
          </li>
          <li>
            <Link to="/">Terms of Use</Link>
          </li>
          <li>
            <Link to="/">Corporate Information</Link>
          </li>
          <li>
            <Link to="/">Legal Notices</Link>
          </li>
        </ul>
        <ul className="pb-10 pt-10 max-sm:pb-4 max-sm:pt-4 flex flex-col gap-4">
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Privacy</Link>
          </li>
          <li>
            <Link to="/">Contact us</Link>
          </li>
          <li>
            <Link to="/">Only on Netflix</Link>
          </li>
        </ul>
      </div>
      <button className="pl-5 pr-5 rounded h-9 bg-slate-900 border-2 font-bold flex items-center gap-2">
        <AiOutlineGlobal size={25} />
        <select id="language" className="outline-none bg-slate-900 w-full ">
          <option>English</option>
          <option>German</option>
          <option>Hindi</option>
          <option>Italian</option>
          <option>French</option>
          <option>Arabic</option>
        </select>
      </button>
    </div>
  );
};

export default Footer;

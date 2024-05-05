import { Link } from "react-scroll";

const NavLink = ({ to, title, ...props }) => {
  return (
    <Link
      to={to}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      offset={-100}
      duration={1000}
      smooth={true}
    >
      {title}
    </Link>
  );
};

export default NavLink;

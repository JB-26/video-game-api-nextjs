import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul className="menu menu-horizontal bg-base-200 rounded-box flex justify-center w-full text-xl">
        <li>
          <a>
            <Link href="/videogames" rel="noopener noreferrer">
              Video Games
            </Link>
          </a>
        </li>
        <li>
          <a>
            <Link href="/" rel="noopener noreferrer">
              Home
            </Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

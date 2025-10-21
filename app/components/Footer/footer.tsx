import Link from "next/link";

const Footer = () => {
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
        <li>
          <a>Item 3</a>
        </li>
      </ul>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Created by{" "}
            <Link
              href="https://www.joshblewitt.dev/"
              className="link"
              rel="noopener noreferrer"
              target="_blank"
            >
              Joshua Blewitt
            </Link>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

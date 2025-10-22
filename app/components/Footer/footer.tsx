import Link from "next/link";

const Footer = () => {
  return (
    <div>
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

import Link from "next/link";

export default function Home() {
  return (
    <div data-theme="lofi" className="min-h-screen flex flex-col">
      <div className="hero bg-base-200 flex-1">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">The Video Game API</h1>
            <p className="py-6">
              Welcome to the Video Game API! A small portfolio project to
              showcase my skills in the following technologies:
            </p>
            <ul>
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>TailwindCSS</li>
              <li>DaisyUI</li>
            </ul>
            <p>
              Looking for the GitHub repo? Check out the{" "}
              <Link
                href="https://github.com/JB-26/video-game-api-nextjs"
                className="link"
                rel="noopener noreferrer"
                target="_blank"
              >
                link here!
              </Link>
            </p>
            <div role="alert" className="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Warning: <strong>Do not enter any personal information!</strong>{" "}
                This is a public API. Please use this API responsibly. Do not
                use this API for any illegal or unethical purposes. This is
                designed to demonstrate my skills.
              </span>
            </div>
          </div>
        </div>
      </div>
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
}

import Link from "next/link";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";

export default function Home() {
  return (
    <div data-theme="lofi" className="min-h-screen flex flex-col">
      <Header />
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
            <p className="py-6">
              Looking for the GitHub repo? Check out the link below!
              <button className="bg-base-100 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                <Link
                  href="https://github.com/JB-26/video-game-api-nextjs"
                  className="link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub Repository
                </Link>
              </button>
            </p>
            <p>
              The GitHub repo also has a JSON Postman collection, which can be
              used to send requests to the API. There are some example requests
              below.
            </p>
            <div
              role="alert"
              className="alert alert-warning py-3 text-center text-xl"
            >
              <span>
                Warning: <strong>Do not enter any personal information!</strong>{" "}
                <br />
                This is a public API. Please use this API responsibly.
                <br />
                Do not use this API for any illegal or unethical purposes.
                <br />
                This is designed to demonstrate my skills.
              </span>
            </div>
            <h2 className="text-2xl font-bold py-4">API Documentation</h2>
            <h3 className="text-xl font-bold">Endpoints</h3>
            <h4 className="text-lg font-bold p-3">GET</h4>
            <p>Retrieves a list of all games in the database.</p>
            <p>Example request</p>
            <div className="mockup-code w-full">
              <pre data-prefix="$">
                <code>
                  curl --location
                  &apos;http://localhost:3000/api/videogame&apos;
                </code>
              </pre>
            </div>
            <p>
              Or, you can view all video games on the{" "}
              <Link href="/videogames">Video Games</Link> page.
            </p>
            <h4 className="text-lg font-bold p-3">POST</h4>
            <p>Creates a new video game in the database.</p>
            <p>Example request:</p>
            <div className="mockup-code w-full">
              <pre data-prefix="$">
                <code>
                  {`curl --location 'http://localhost:3000/api/videogame' \\
            --header 'Content-Type: application/json' \\
            --data '{
                "title": "Teleroboxer",
                "platform": "Virtual Boy",
                "developer": "Nintendo",
                "releaseDate": "1995-07-21"
            }'`}
                </code>
              </pre>
            </div>
            <p>
              Or, you can add a new video game on the{" "}
              <Link href="/addGame">Add Game</Link> page.
            </p>
            <h4 className="text-lg font-bold p-3">PATCH</h4>
            <p>Updates an existing video game in the database.</p>
            <p>Example request:</p>
            <div className="mockup-code w-full">
              <pre data-prefix="$">
                <code>
                  {`curl --location --request PATCH 'http://localhost:3000/api/videogame' \
                  --header 'Content-Type: application/json' \
                  --data '{
                      "id": "68f132db91b7c422b855f547",
                      "newTitle": "Super Smash Bros. Melee",
                      "newPlatform": "GameCube",
                      "newDeveloper": "Nintendo",
                      "newReleaseDate": "2001-11-21"
                  }'`}
                </code>
              </pre>
            </div>
            <p>
              Or, you can update a video game on the{" "}
              <Link href="/updateGame">Update Game</Link> page.
            </p>
            <h4 className="text-lg font-bold p-3">DELETE</h4>
            <p>Deletes a video game from the database.</p>
            <p>Example request</p>
            <div className="mockup-code w-full">
              <pre data-prefix="$">
                <code>
                  {`curl --location --request DELETE 'http://localhost:3000/api/videogame?gameId=68f3618fe2a8856bd22843ad'`}
                </code>
              </pre>
            </div>
            <p>
              Or, you can delete a video game on the{" "}
              <Link href="/deleteGame">Delete Game</Link> page.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

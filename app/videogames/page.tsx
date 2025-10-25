import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

interface VideoGame {
  id: number;
  title: string;
  platform: string;
  developer: string;
  releaseDate: string;
}

const VideoGame = async () => {
  const res = await fetch("http://localhost:3000/api/videogame", {
    // if you have data that changes frequently, use 'no-store'
    cache: "no-store",
  });
  // annotate to be an array of users
  const videoGames: VideoGame[] = await res.json();
  console.log(videoGames);
  return (
    <div data-theme="lofi" className="min-h-screen flex flex-col">
      <Header />
      <div className="hero bg-base-200 flex-1">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Video Games in the API</h1>
            <p>
              Here you will find what is currently stored in MongoDB! If you
              have added a new game, it will be displayed here. You might need
              to refresh the page if you had this page opened when you added a
              new game.
            </p>
            <h2 className="text-3xl font-bold p-3.5">Video Games</h2>
            <p>This fetch was made at {new Date().toLocaleTimeString()}</p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Platform</th>
                  <th>Developer</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                {videoGames.map((game) => (
                  <tr key={game.id}>
                    <td>{game.title}</td>
                    <td>{game.platform}</td>
                    <td>{game.developer}</td>
                    <td>{new Date(game.releaseDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoGame;

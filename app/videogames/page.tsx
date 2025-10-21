import Link from "next/link";
import Footer from "../components/Footer/footer";

const VideoGame = () => {
  return (
    <div data-theme="lofi" className="min-h-screen flex flex-col gap-6 p-7">
      <h1 className="text-5xl font-bold">Video Games in the API</h1>
      <Footer />
    </div>
  );
};

export default VideoGame;

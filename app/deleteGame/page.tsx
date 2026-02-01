"use client";
import { useState, useEffect } from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

interface VideoGame {
    _id: string;
    title: string;
    platform: string;
    developer: string;
    releaseDate: string;
}

const DeleteGame = () => {
    const [videoGames, setVideoGames] = useState<VideoGame[]>([]);
    const [selectedGameId, setSelectedGameId] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch("api/videogame");
                const data = await response.json();
                setVideoGames(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchGames();

    }, []);

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/videogame?gameId=${selectedGameId}`, { method: "DELETE" })
            const data = await response.json();

            if (response.ok) {
                alert("Game has been deleted successfully!")
                // refresh the list
                const gamesResponse = await fetch("/api/videogame");
                const updatedGames = await gamesResponse.json();
                setVideoGames(updatedGames);
                setSelectedGameId("");
            } else {
                alert(`Failed to delete game! ${data.message}`);
            }

        } catch (error) {
            console.error(error);
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div data-theme="lofi">
            <Header />
            <div className="flex flex-col justify-center items-center">
            <h1 className="flex text-5xl font-bold">Delete Game</h1>
                <div className="alert alert-error m-3 text-lg">
                    <span>Warning: This will delete the chosen game from the database!</span>
                </div>
                <label className="text-lg">Choose a game to delete:</label>
                <select className='bg-base-300 m-3 text-lg' value={selectedGameId} onChange={(e) => { setSelectedGameId(e.target.value) }}>
                    {videoGames.map((game) => (
                        <option key={game._id} value={game._id}>{game.title}</option>
                    ))}
                </select>
                <button className="bg-red-500 p-2 m-3 text-white rounded text-lg hover:bg-red-600" onClick={handleDelete} disabled={!selectedGameId}>Delete Game</button>
            </div>
            <Footer />
        </div>
    )
}

export default DeleteGame;
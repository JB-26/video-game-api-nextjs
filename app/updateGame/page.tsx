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

const UpdateGame = () => {
    const [videoGames, setVideoGames] = useState<VideoGame[]>([]);
    const [selectedGameId, setSelectedGameId] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        platform: "",
        developer: "",
        releaseDate: "",
      });

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch("api/videogame");
                const data = await response.json();
                setVideoGames(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchGames();

    }, []);

    const handleUpdate = async(e: React.FormEvent<HTMLFormElement>) => {
        // prevents refresh
        e.preventDefault()
        
        const dataToSend = {
            id: selectedGameId,
            newTitle: formData.title,
            newPlatform: formData.platform,
            newDeveloper: formData.developer,
            newReleaseDate: formData.releaseDate
        }
        try {
            console.log(JSON.stringify(dataToSend));
            const response = await fetch(`/api/videogame?gameId`, {
                method: "PATCH", headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify(dataToSend),
            })
            const data = await response.json();

            if(response.ok) {
                alert("Game has been updated succesfully!");
                // refresh the list
                const gamesResponse = await fetch("api/videogame");
                const updatedGames = await gamesResponse.json();
                setVideoGames(updatedGames);
                setSelectedGameId("");
                // Reset form data on adding the game
                setFormData({
                    title: "",
                    platform: "",
                    developer: "",
                    releaseDate: "",
                });
            } else {
                alert(`Failed to update game! ${data.message}`)
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <div data-theme="lofi">
            <Header />
            <div className="flex flex-col justify-center items-center">
                <h1 className="flex text-5xl font-bold">Update Game</h1>
                <label className="text-lg">Choose a game to update:</label>
                <form className="flex flex-col gap-2 m-2" onSubmit={handleUpdate}>
                    <select className='bg-base-300 m-3 text-lg' value={selectedGameId} onChange={(e) => { setSelectedGameId(e.target.value) }}>
                        {videoGames.map((game) => (
                            <option key={game._id} value={game._id}>{game.title}</option>
                        ))}
                    </select>
                    <input className="bg-base-300" type="text" required placeholder="Game Name" value={formData.title} onChange={(e) => { setFormData({...formData, title: e.target.value})}}></input>
                    <input className="bg-base-300" type="text" required placeholder="Game Platform" value={formData.platform} onChange={(e) => { setFormData({...formData, platform: e.target.value})}}></input>
                    <input className="bg-base-300" type="text" required placeholder="Game Developer" value={formData.developer} onChange={(e) => { setFormData({...formData, developer: e.target.value})}}></input>
                    <input className="bg-base-300" type="date" required placeholder="Game Release Date" value={formData.releaseDate} onChange={(e) => { setFormData({...formData, releaseDate: e.target.value})}}></input>
                    <button className="bg-green-700 text-white p-2 m-3 rounded hover:bg-green-800" disabled={!selectedGameId}>Update Game</button>
                </form>
            </div>
            <Footer />
        </div>
    )

}


export default UpdateGame;


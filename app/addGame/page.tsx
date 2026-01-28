"use client";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { useState } from "react";

const AddGame = () => {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    developer: "",
    releaseDate: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/videogame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("Game was added successfully!");
        // Reset form data on adding the game
        setFormData({
          title: "",
          platform: "",
          developer: "",
          releaseDate: "",
        });
      } else if (response.status !== 200) {
        alert(`Failed to add game! ${result.message}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-theme="lofi">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <h1 className="flex text-5xl font-bold">Add Game</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="bg-base-300"
            type="text"
            placeholder="Game Name"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
          <input
            className="bg-base-300"
            type="text"
            placeholder="Game Platform"
            value={formData.platform}
            onChange={(e) =>
              setFormData({ ...formData, platform: e.target.value })
            }
          ></input>
          <input
            className="bg-base-300"
            type="text"
            placeholder="Game Developer"
            value={formData.developer}
            onChange={(e) =>
              setFormData({ ...formData, developer: e.target.value })
            }
          ></input>
          <input
            className="bg-base-300"
            type="date"
            placeholder="Game Release Date"
            value={formData.releaseDate}
            onChange={(e) =>
              setFormData({ ...formData, releaseDate: e.target.value })
            }
          ></input>
          <button
            className="bg-green-700 p-2 text-white rounded hover:bg-green-800"
            type="submit"
          >
            Add Game
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default AddGame;

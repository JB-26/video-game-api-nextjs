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
        <p className="text-xl m-3">
          Fill out the form below and add a new game to the database!
        </p>
        <div
          role="alert"
          className="alert alert-warning py-3 text-center text-xl m-3"
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
        <form className="flex flex-col gap-2 m-2" onSubmit={handleSubmit}>
          <input
            className="bg-base-300"
            type="text"
            placeholder="Game Name"
            value={formData.title}
            required
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
          <input
            className="bg-base-300"
            type="text"
            placeholder="Game Platform"
            value={formData.platform}
            required
            onChange={(e) =>
              setFormData({ ...formData, platform: e.target.value })
            }
          ></input>
          <input
            className="bg-base-300"
            type="text"
            placeholder="Game Developer"
            value={formData.developer}
            required
            onChange={(e) =>
              setFormData({ ...formData, developer: e.target.value })
            }
          ></input>
          <input
            className="bg-base-300"
            type="date"
            placeholder="Game Release Date"
            value={formData.releaseDate}
            required
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

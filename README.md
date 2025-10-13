# video-game-api-nextjs

Welcome to the Video Game API! This is a personal project to learn and demonstrate my skills in the following technologies:
- NextJS
- TypeScript
- React
- Node
- Tailwind CSS
- DaisyUI
- MongoDB
- Mongoose


# MongoDB
This is being used to store and retrieve data for the API, and it being hosted on MongoDB Atlas.

The driver is installed using NPM:
```
npm install mongodb
```
The credentials are stored in the .env file (which is not committed to the repo)

To ensure that any IP can access the database, Atlas is configured to allow access from any IP address via the Network Access tab on the Atlas dashboard.

The file for connecting to the database is stored under the `lib` folder. This is where the package `mongoose` is used to interact with the database. Mongoose provides a straight-forward, schema-based solution to model application data.

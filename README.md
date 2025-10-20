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

# The API
Everything backend will be in the api folder. The `videogame` folder will be an API once we have the `route.ts` file, the name cannot be changed.

If we have a folder with parentheses, `(auth)`, this will be ignored in the URL on the backend and frontend.

If we have a folder with square brackets, `[category]`, this will be dynamic.

# Styling
Tailwind CSS is a popular CSS framework.
`global.css` is reserved for styles that are truly global. If styling a page or a component, then a CSS module is recommended.
A CSS Module is a file that is scoped to a component/page, it can prevent styles from clashing.

# Tailwind CSS
A popular CSS framework, that uses the concept of utility classes.
When you build your application, our final CSS bundle will only have the utility classes that have been used in the markup.

# Daisy UI
A popular component library for Tailwind CSS. Think of it as Bootstrap for Tailwind CSS.
*Note* As we are using turbopack, we need to add the following to the `package.json` file:
```
npm pkg set browserslist="> 1%"
```
The lightning CSS config can modify some styles, the command above will tell lightning CSS to target modern browsers instead of polyfilling styles for outdated browsers.

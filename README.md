# Laptop Customizer
_Starter project for React course_

# Component Structure
* index.js (stateless)
    * app.js (statefull) - get the "FEATURES" object from the index.js
        * header (stateless)
        * features (stateless) gets the "features" and the "selected" props and "handleUpdate" call back prop from the app.js
            * feature list (stateless) gets the "features" and the "selected" props and "handleUpdate" call back prop from the features.js
        * cart (stateless) gets the "selected" props


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

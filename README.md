# Laptop Customizer

## Components Structure
* Index.js (stateless)
    * App.js (statefull) - gets the "FEATURES" object from the index.js
        * Header (stateless)
        * Features (stateless) - gets the "features" and the "selected" props and "handleUpdate" call back prop from the App.js
            * FeatureList (stateless) - gets the "features" and the "selected" props and "handleUpdate" call back prop from the Features.js
        * Cart (stateless) - gets the "selected" props from the App.js

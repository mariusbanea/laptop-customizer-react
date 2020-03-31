# Laptop Customizer

## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (statefull) - gets the "FEATURES" object from the __Index.js__
        * __Header.js__ (stateless)
        * __Features.js__ (stateless) - gets the "features" and the "selected" props and "handleUpdate" call back prop from the __App.js__
            * __FeatureList.js__ (stateless) - gets the "features" and the "selected" props and "handleUpdate" call back prop from the __Features.js__
        * __Cart.js__ (stateless) - gets the "selected" props from the __App.js__

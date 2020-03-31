# Laptop Customizer

## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (statefull) - gets the _"FEATURES"_ object from the __Index.js__
        * __Header.js__ (stateless)
        * __Features.js__ (stateless) - gets the _"features"_ and the _"selected"_ props and _"handleUpdate"_ call back prop from the __App.js__
            * __FeatureList.js__ (stateless) - gets the _"features"_ and the _"selected"_ props and _"handleUpdate"_ call back prop from the __Features.js__
        * __Cart.js__ (stateless) - gets the _"selected"_ props from the __App.js__

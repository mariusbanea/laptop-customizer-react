# Laptop Customizer

## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (statefull)
        * __Header.js__ (stateless)
        * __FeaturesContainer.js__ (stateless) - gets the _"features"_ and the _"selected"_ props and _"handleUpdate"_ call back prop from the __App.js__ and the _"FeatureStore"_ object from the __FeatureStore.js__
            * __FeatureList.js__ (stateless) - gets the _"features"_ and the _"selected"_ props and _"handleUpdate"_ call back prop from the __FeaturesContainer.js__
                * __FeatureItem.js__ (stateless) - gets the _"item"_ and the _"feature"_ and the _"featureClass"_ props and _"handleUpdate"_ call back prop from the __FeatureList.js__
        * __ShoppingCart.js__ (stateless) - gets the _"selected"_ props from the __App.js__
            * __Summary.js__ (stateless) - gets the _"selected"_ from the __ShoppingCart.js__
            * __Total.js__ (stateless) - gets the _"total"_ from the __ShoppingCart.js__

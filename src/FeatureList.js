import React from 'react';
import FeatureItem from './FeatureItem'

function FeatureList(props) {

  const features = Object.keys(props.features)
    .map(key => {
      const options = props.features[key].map((item, index) => {

        const selectedClass = item.name === props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (

          <FeatureItem
            item={item}
            feature={key}
            handleUpdate={props.handleUpdate}
            featureClass={featureClass}
          />

        )
      });

      return (
        <div className="feature" key={key}>
          <legend className="feature__name">
            <h3>{key}</h3>
          </legend>
          {/*<ul className="feature__list">*/}
            {options}
          {/*</ul>*/}
        </div>
      )
    });

  return features
}

export default FeatureList;

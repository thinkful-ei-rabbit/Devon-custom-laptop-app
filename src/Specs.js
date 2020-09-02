import React from 'react'
import Parts from './Parts'

export default function Specs (props) { 
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>
            {featureHash}
          </h3>
        </legend>
        <Parts features={props.features} selected={props.selected} updateFeature={props.updateFeature} feature={feature}/>
      </fieldset>
    );
  });
  
  return features

}
import React from 'react'
// import Features from './Features'


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
        options
        {/* <Features features={props.features} selected={props.selected} updateFeature={props.updateFeature}/> */}
      </fieldset>
    );
  });
  
  return features

}
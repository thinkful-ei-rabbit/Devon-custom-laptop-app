import React from 'react';
import slugify from 'slugify';

export default function Features (props) {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === props.selected[feature].name}
            onChange={e => props.updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{features}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  return features
}
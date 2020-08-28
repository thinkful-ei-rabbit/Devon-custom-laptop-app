import React from 'react';
import Features from './Features'

export default function CustomOptions (props) {
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <Features  features={props.features} selected={props.selected} updateFeature={props.updateFeature}/>  
    </form>
  )
}
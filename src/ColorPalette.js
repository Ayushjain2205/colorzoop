import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './ColorPalette.css'

export default class ColorPallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ))
    return (
      <div className="ColorPalette">
        {/* navbar */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    )
  }
}

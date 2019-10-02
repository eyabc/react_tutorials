import React, { Component } from 'react'
import './Palette.css'
class Palette extends Component {
    render () {
        const { color, onClick } = this.props
        const colorList = color.map((e, k) => <p key={k}
            style={{ color: color[k] }} className="color" 
            onClick={() => onClick(k)}
            >{e}
        </p>)
        return (
            <div className="palette">
                { colorList }
            </div>
        )
    }
}

export default Palette
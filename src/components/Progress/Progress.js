import React, {Component} from 'react'

export default class Progress extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="components-progress">
                { this.props.progress }s
            </div>
        )
    }
}
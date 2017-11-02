import React, {Component} from 'react'
import './Header.less'

export default class Header extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className="components-header row">
                <img src="/static/images/logo.png" alt="logo" width="40" className="-col-auto"/>
                <h1 className="caption">React Music player</h1>
            </div>
        )
    }
}
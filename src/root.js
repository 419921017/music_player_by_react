import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import jPlayer from 'jPlayer'
import 'static/css/reset.css'
import 'static/css/common.css'

import Header from 'components/Header/Header'
import Progress from 'components/Progress/Progress'

export default class Root extends Component {
    constructor (props) {
        super(props)
        this.state = {
            progress: '-'
        }
    }
    componentDidMount () {
   
    }
    render () {
        return (
            <div>
                <Header/>
                <Progress progress={this.state.progress}/>
            </div>
        )
    }
}
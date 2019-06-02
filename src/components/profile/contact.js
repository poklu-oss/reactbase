import React from 'react'
import {ContextualMenuBasicExample} from './contactui.tsx'
class Contact extends React.Component {
	constructor(){
		super()
		this.state={a:'what'}
	}
	render(){
		return (<div><ContextualMenuBasicExample>Primary</ContextualMenuBasicExample></div>)
   }
}

export default Contact
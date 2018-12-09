import React from 'react'
import { PRIMARY_COLOR } from '../config.js'

const OverBackdrop = ({ children, source }) => (
	<div className="muibackdrop" style={{backgroundSize: 'cover', transition: 'background 0.5s', backgroundColor: PRIMARY_COLOR, backgroundImage: 'url("' + source.uri + '")', 'z-index': -44000, height: '220pt', position: 'absolute', left: '0pt', top: '0pt', 'width': '100%'}}>
		{children}
	</div>
)

export default OverBackdrop;


import React from 'react'
import { PRIMARY_COLOR } from '../config.js'

const OverBackdrop = ({ source, opacity=1 }) => (
	<div className="muibackdrop" style={{display: 'flex', 'z-index': -44000, height: '220pt', backgroundColor: PRIMARY_COLOR, position: 'absolute', left: '0pt', top: '0pt', 'width': '100%'}}>
		<div style={{flexGrow: 1, backgroundSize: 'cover', transition: 'background 0.5s', opacity: opacity, backgroundImage: 'url("' + source.uri + '")'}}>
		
		</div>
	</div>
)

export default OverBackdrop;


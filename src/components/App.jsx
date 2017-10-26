import React from 'react'
import data from '../data'

const card = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'flex-row',
	background: '#fff',
	borderRadius: '2px',
	height: '300px',
	width: '600px',
	margin: '0 auto',

	boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
	transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
}

const image = {
	flex: '1 auto',
	height: '100%',
	width: 'auto',
}

const description = {
	flex: '1 auto',
	heigh: '100%',
	verticalAlign: 'middle',
	fontFamily: 'Helvetica',
	fontSize: '22px',
	fontWeigh: 'bold',
}

const Description = ({ Name, Positions }) => {
	return React.createElement(
		'div',
		{ style: description },
		[
			Name,
			React.createElement('br'),
			Positions[0].Name,
		]
	)
}

const Picture = ({ ImageUrl }) => {
	const BASE_API = 'http://api-hrm.htec.rs'
	const ADORABLE_AVATARS = "https://api.adorable.io/avatars/285/alex@htecgroup.com"
	const url = !!ImageUrl ? `${BASE_API}/${ImageUrl}` : ADORABLE_AVATARS

	return React.createElement(
		'img',
		{
			src: url,
			style: image
		},
	)
}

const Card = ({ Name, ImageUrl, Positions }) => {
	return React.createElement(
		'div',
		{
			style: card
		},
		[
			Picture({ ImageUrl }),
			Description({ Name, Positions }),
		]
	)
}


const App = React.createElement(
	'div',
	{
		style: { textAlign : 'center' },
	},
	Card(data.find(item => item.Name === "Nenad Todorovic"))
)

export default App

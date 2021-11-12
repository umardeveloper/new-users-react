import React from 'react';
import './App.scss';

import Authenticated from './Authenticated'
import Unauthenticated from './Unauthenticated'

import useToken from './Hooks/useToken'

function App() {

	const [token] = useToken()

	if(token){
		return <Authenticated/>
	}else {
		return <Unauthenticated/>
	}
}

export default App;

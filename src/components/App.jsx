import React from 'react';
import { GlobalStyle } from './utils';

// Imported Components
import Landing from './organisms/Landing';
import Skills from './organisms/Skills';
import Work from './organisms/Work';
import Footer from './organisms/Footer';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Landing />
			<Skills />
			<Work />
			<Footer />
		</>
	);
};

export default App;

import { useState, useEffect } from 'react';

import data from '../../data/etsy.json'
import Listing  from '../listing/listing';
import '../../css/main.css';

const App = () =>  {
	const copyData = JSON.parse(JSON.stringify(data));
	
	const [items, setItems] = useState([]);
  const [loading, getLoading] = useState(true);

  useEffect(() => {
		setTimeout(() => {
			setItems(copyData);
			getLoading(false);
		}, 1000);
  }, [copyData]);

	return (
		<div className="wrapper">
			{loading ? (<div className="loading"></div>) : (<Listing items={items}/>)}
		</div>
	)
}

export default App;

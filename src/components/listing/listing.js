import '../../css/main.css';

const Listing = ({items}) =>  {
	const lengthSentence = (item) => {
    if (item && item.length > 50) {  
      return item.slice(0, 50) + '…';
    }
    return item || ''; 
  }

	const converterCurrency = (item, price) => {
		if (item === 'USD') {
			return `$${price}`
		} else if (item === 'EUR') {
			return `€${price} `
		} else {
			return `${price} GBP`
		}
	}

	const countRest = (item) => {
		let classNames = "item-quantity";
		
		if (item <= 10) {
			return classNames += " level-low";
		} else if (item <= 20) {
			return classNames += " level-medium";
		} else if (item > 20) {
			return classNames += " level-high";
		}
	}

	return (
		<div className="item-list">
			{items.map(item => {
				return (
					<div className="item" key={item.listing_id}>
						<div className="item-image">
						<a href={item.url}>
							<img alt={item.title} src={item.MainImage?.url_570xN}/>
						</a>
					</div>
						<div className="item-details">
							<p className="item-title">{lengthSentence(item.title)}</p>
							<p className="item-price">{converterCurrency(item.currency_code, item.quantity)}</p>
							<p className={countRest(item.quantity)}>{item.quantity + ' left'}</p>
						</div>
					</div>
				)
			})}	
		</div>
	)	
}

export default Listing;
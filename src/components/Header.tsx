import * as React from 'react';
// import { Route } from 'react-router-dom';
// const DATA = require('../config.json');

// const AllButton = () => (
// 	<Route render={({ history}) => (
// 	  <button
// 		type="button"
// 		className="w3-button w3-black"
// 		onClick={() => { history.push('/Ismertetők'); }}
// 	  >
// 		Összes
// 	  </button>
// 	)} />
//   );

	interface Props {
		// openMenu: Function;
	}

class Header extends React.Component<Props, any> {
	constructor(prop: Props) {
		super(prop);

		// this.clickHandler = this.clickHandler.bind(this);
	}

	// clickHandler = () => {
	// 	this.props.openMenu();
	// }

	public render() {
		// let siteTitle = process.env.REACT_APP_SITE_CAPTION || DATA.siteTitle;

		return (
			<header id="portfolio">
				{/* <a href="#"><img src="/w3images/avatar_g2.jpg" className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity" /></a> */}
				<span className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" ><i className="fa fa-bars" /></span>
				{/* <div className="w3-container">
					<h1><b>{siteTitle}</b></h1>
					<div className="w3-section w3-bottombar w3-padding-16">
						<span className="w3-margin-right">Filter:</span>
						<AllButton/>
						<button className="w3-button w3-white" disabled={true}><i className="fa fa-diamond w3-margin-right" />Manga</button>
						<button className="w3-button w3-white w3-hide-small" disabled={true}><i className="fa fa-photo w3-margin-right" />Anime</button>
						<button className="w3-button w3-white w3-hide-small" disabled={true}><i className="fa fa-map-pin w3-margin-right" />Other</button>
					</div>
				</div> */}
			</header>

		);
	}
}

export default Header;

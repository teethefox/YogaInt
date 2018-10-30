import React, { Component } from 'react';
import '../App.css';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment >
   <header className="ygi-header ygi-header--dark ygi-header--default">
<div className="container">
<nav className="ygi-header__nav-container ygi-header__nav-container">
<div className="ygi-mobile-menu" id="ygi-mobile-menu-modal">
<div className="ygi-mobile-menu__header">
<div className="ygi-mobile-menu--mobile" >
<img src="../logo.svg" className="ygi-header__logo--mobile" alt="Yoga International" />
</div>
<a className="ygi-mobile-menu--mobile" href="/">
<svg role="presentation" className="ygi-header__logo-text--dark">
</svg>
</a>
<button className="ygi-mobile-menu__close-btn ygi-close-modal" data-target="ygi-mobile-menu-modal"></button>
</div>
<div className="ygi-mobile-menu__menu-wrapper">
<div className="ygi-mobile-menu__menu-content">
<form>
<div className="ygi-search-bar ">
<div className="ygi-search-bar__wrapper">
<input type="search"  placeholder="Search..." />
<a href="/" className="icon-wrapper ygi-search-bar__icon-wrapper">
<svg role="presentation" className="icon-search-grey">
</svg>
</a>
</div>
</div>
</form>
<nav className="ygi-mobile-menu__menu">
<div className="ygi-mobile-menu__menu-section">
<a href="/classes/" className="ygi-open-sub-menu">
<label className="ygi-mobile-menu__main-menu__heading">
Classes <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
<div className="ygi-mobile-menu__menu-section">
<a href="/learn" className="ygi-open-sub-menu">
<label className="ygi-mobile-menu__main-menu__heading">
Learn <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
 </a>
</div>
<div className="ygi-mobile-menu__menu-section">
<a href="/challenges/" className="ygi-open-sub-menu">
<label className="ygi-mobile-menu__main-menu__heading">
Challenges <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
<div className="ygi-mobile-menu__menu-section">
<a href="/courses/" className="ygi-open-sub-menu">
<label className="ygi-mobile-menu__main-menu__heading">
Courses <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
<div className="ygi-mobile-menu__menu-section">
<a href="/teachers/" className="ygi-open-sub-menu">
<label className="ygi-mobile-menu__main-menu__heading">
Teachers <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
</nav>
</div>
<div className="ygi-mobile-menu__account-section">
<button className="ygi-mobile-menu__account-section-btn ygi-mobile-menu__account-section-sign-in ygi-open-modal" aria-label="Opens Sign In Modal" data-target="ygi-sign-in-modal">Sign In</button>
<a href="/signup" className="ygi-mobile-menu__account-section-btn ygi-mobile-menu__account-section-sign-up">Sign Up</a>
</div>
</div>
</div>
<a className="ygi-header__brand" href="/">
<img className="ygi-header__logo" src="/assets/fonts/icons/icon-logo.svg" alt="Yoga International" />
</a>
<a className="ygi-header__brand" href="/">
<svg role="presentation" className="ygi-header__logo-text">
</svg>
<svg role="presentation" className="ygi-header__logo-text--dark">
</svg>
</a>
<div className="ygi-header__wrapper--mobile">
<a className="ygi-header__brand--mobile" href="/">
<img src="/assets/fonts/icons/icon-logo.svg" alt="Yoga International" className="ygi-header__logo--mobile" />
</a>
<a className="ygi-header__brand--mobile" href="/">
<svg role="presentation" className="ygi-header__logo-text">
</svg>
<svg role="presentation" className="ygi-header__logo-text--dark">
</svg>
</a>
<button className="ygi-header__hamburger ygi-open-modal" data-target="ygi-mobile-menu-modal">
<svg role="presentation" className="icon-hamburger">
</svg>
</button>
<button className="ygi-header__hamburger--dark ygi-open-modal" data-target="ygi-mobile-menu-modal">
<svg role="presentation" className="icon-hamburger-dark">
</svg>
</button>
</div>
<ul className="ygi-header__nav nav">
<li className="ygi-header__nav-item">
<a className="ygi-header__link" href="/classes/" data-toggle="tab-2">Classes</a>
</li>
<li className="ygi-header__nav-item">
<a className="ygi-header__link" href="/learn" data-toggle="tab-1">Learn</a>
</li>
<li className="ygi-header__nav-item">
<a className="ygi-header__link" href="/courses/" data-toggle="tab-3">Courses</a>
</li>
</ul>
<ul className="ygi-header__nav ygi-header__nav--right">
<li className="ygi-header__nav-item">
<form className="ygi-header__search" >
<input type="search" placeholder="Search..." name="keywords" className="ygi-header__search-input"  />
<input type="submit" className="ygi-header__search-submit"  />
<svg role="presentation" className="ygi-header__search-icon icon-search">
</svg>
<svg role="presentation" className="ygi-header__search-icon ygi-header__search-icon--grey icon-search-grey">
</svg>
</form>
</li>
<li className="ygi-header__nav-item">
<a className="ygi-header__link ygi-open-modal" aria-label="Opens Sign In Modal" data-target="ygi-sign-in-modal" href='/'>Sign In</a>
</li>
<li className="ygi-header__nav-item">
<a className="yi-button yi-button__nav" href="/signup">Get Started</a>
</li>
</ul>

</nav>
</div>
</header>
      </React.Fragment>
    );
  }
}



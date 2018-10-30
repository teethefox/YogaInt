import React, { Component } from 'react';
import '../App.css';


export default class Header extends Component {
  render() {
    return (
      <React.Fragment >
   <header class="ygi-header ygi-header--dark ygi-header--default">
<div class="container">
<nav class="ygi-header__nav-container ygi-header__nav-container">
<div class="ygi-mobile-menu" id="ygi-mobile-menu-modal">
<div class="ygi-mobile-menu__header">
<a class="ygi-mobile-menu--mobile" href="/">
<img src="/assets/fonts/icons/icon-logo.svg" class="ygi-header__logo--mobile" alt="Yoga International" />
</a>
<a class="ygi-mobile-menu--mobile" href="/">
<svg role="presentation" class="ygi-header__logo-text--dark">
</svg>
</a>
<button class="ygi-mobile-menu__close-btn ygi-close-modal" data-target="ygi-mobile-menu-modal"></button>
</div>
<div class="ygi-mobile-menu__menu-wrapper">
<div class="ygi-mobile-menu__menu-content">
<form method="GET" action="https://yogainternational.com/search">
<div class="ygi-search-bar ">
<div class="ygi-search-bar__wrapper">
<input type="search" name="keywords" value="" class="ygi-search-bar__input" placeholder="Search..." />
<a href="javascript:void(0)" class="icon-wrapper ygi-search-bar__icon-wrapper">
<svg role="presentation" class="icon-search-grey">
</svg>
</a>
</div>
</div>
</form>
<nav class="ygi-mobile-menu__menu">
<div class="ygi-mobile-menu__menu-section">
<a href="/classes/" class="ygi-open-sub-menu">
<label class="ygi-mobile-menu__main-menu__heading">
Classes <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
<div class="ygi-mobile-menu__menu-section">
<a href="/learn" class="ygi-open-sub-menu">
<label class="ygi-mobile-menu__main-menu__heading">
Learn <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
 </a>
</div>
<div class="ygi-mobile-menu__menu-section">
<a href="/challenges/" class="ygi-open-sub-menu">
<label class="ygi-mobile-menu__main-menu__heading">
Challenges <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
<div class="ygi-mobile-menu__menu-section">
<a href="/courses/" class="ygi-open-sub-menu">
<label class="ygi-mobile-menu__main-menu__heading">
Courses <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
<div class="ygi-mobile-menu__menu-section">
<a href="/teachers/" class="ygi-open-sub-menu">
<label class="ygi-mobile-menu__main-menu__heading">
Teachers <img src="/assets/fonts/icons/icon-right-arrow.svg" alt="Expand Dropdown" />
</label>
</a>
</div>
</nav>
</div>
<div class="ygi-mobile-menu__account-section">
<button class="ygi-mobile-menu__account-section-btn ygi-mobile-menu__account-section-sign-in ygi-open-modal" aria-label="Opens Sign In Modal" data-target="ygi-sign-in-modal">Sign In</button>
<a href="/signup" class="ygi-mobile-menu__account-section-btn ygi-mobile-menu__account-section-sign-up">Sign Up</a>
</div>
</div>
</div>
<a class="ygi-header__brand" href="/">
<img class="ygi-header__logo" src="/assets/fonts/icons/icon-logo.svg" alt="Yoga International" />
</a>
<a class="ygi-header__brand" href="/">
<svg role="presentation" class="ygi-header__logo-text">
</svg>
<svg role="presentation" class="ygi-header__logo-text--dark">
</svg>
</a>
<div class="ygi-header__wrapper--mobile">
<a class="ygi-header__brand--mobile" href="/">
<img src="/assets/fonts/icons/icon-logo.svg" alt="Yoga International" class="ygi-header__logo--mobile" />
</a>
<a class="ygi-header__brand--mobile" href="/">
<svg role="presentation" class="ygi-header__logo-text">
</svg>
<svg role="presentation" class="ygi-header__logo-text--dark">
</svg>
</a>
<button class="ygi-header__hamburger ygi-open-modal" data-target="ygi-mobile-menu-modal">
<svg role="presentation" class="icon-hamburger">
</svg>
</button>
<button class="ygi-header__hamburger--dark ygi-open-modal" data-target="ygi-mobile-menu-modal">
<svg role="presentation" class="icon-hamburger-dark">
</svg>
</button>
</div>
<ul class="ygi-header__nav nav">
<li class="ygi-header__nav-item">
<a class="ygi-header__link" href="/classes/" data-toggle="tab-2">Classes</a>
</li>
<li class="ygi-header__nav-item">
<a class="ygi-header__link" href="/learn" data-toggle="tab-1">Learn</a>
</li>
<li class="ygi-header__nav-item">
<a class="ygi-header__link" href="/courses/" data-toggle="tab-3">Courses</a>
</li>
</ul>
<ul class="ygi-header__nav ygi-header__nav--right">
<li class="ygi-header__nav-item">
<form class="ygi-header__search" method="GET" action="https://yogainternational.com/search">
<input type="search" placeholder="Search..." name="keywords" value="" class="ygi-header__search-input" required="" />
<input type="submit" class="ygi-header__search-submit" value="" />
<svg role="presentation" class="ygi-header__search-icon icon-search">
</svg>
<svg role="presentation" class="ygi-header__search-icon ygi-header__search-icon--grey icon-search-grey">
</svg>
</form>
</li>
<li class="ygi-header__nav-item">
<a class="ygi-header__link ygi-open-modal" aria-label="Opens Sign In Modal" data-target="ygi-sign-in-modal">Sign In</a>
</li>
<li class="ygi-header__nav-item">
<a class="yi-button yi-button__nav" href="/signup">Get Started</a>
</li>
</ul>

</nav>
</div>
</header>
      </React.Fragment>
    );
  }
}



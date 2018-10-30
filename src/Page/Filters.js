import React, { Component } from 'react';
import '../App.css';


export default class Filters extends Component {
    constructor(){
        super() 
          this.state = {
              teacherMenu: false,
              durationMenu: false,
              levelMenu: false,
              styleMenu: false,
              anatomyMenu: false,
              filters: [] ,
              types: []    
          }
      }
   showMenu = (type) =>{
       this.setState({[type] : !this.state[type]})
   }

   filter = (type, data) =>{
    let filters = this.state.filters;
    let types = this.state.types;

    filters.push(data)  
    types.push(type)  

    this.props.filter(type, filters)
       this.setState({   
        teacherMenu: false,
        durationMenu: false,
        levelMenu: false,
        styleMenu: false,
        anatomyMenu: false,
        filters: filters, types: types})
   }

 camelCase = (data) => {
     if(data !== undefined){
         if(data[0] === "level-1-2"){
             return "level 1/2"
         }
         else if(data[0] === "level-2-3"){
            return "level 2/3"
        }else{
      let string = data.toString()
    return string.replace( /-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        }
     }
}
teacherMenu = () =>{
    let teacherSet = new Set(this.props.classes.map((classes, index) => (
        classes.teacher[0]
     )))
     let teachers = [...teacherSet]
    return (
       
        <div className="dropdown-menu ygi-dropdown__menu show" >
         {teachers.map((teacher, index) => (
            <button onClick={()=>this.filter('teacher', teacher)} className="dropdown-item ygi-dropdown__option" key={index}> {this.camelCase(teacher)} </button>
         ))}
        </div>
    )
}
durationMenu = () =>{
    let durationSet = new Set(this.props.classes.map((classes, index) => (
        classes.duration[0]
     )))
     let duration = [...durationSet]
    return (
        <div className="dropdown-menu ygi-dropdown__menu show" style={{marginLeft:'2em'}}>
         {duration.map((duration, index) => (
            <button onClick={()=>this.filter('duration', duration)} className="dropdown-item ygi-dropdown__option" key={index}> {this.camelCase(duration)}  </button>
         ))}
        </div>
    )
}
levelMenu = () =>{
    let levelSet = new Set(this.props.classes.map((classes, index) => (
        classes.level[0]
     )))
     let level = [...levelSet]
    return (
        <div className="dropdown-menu ygi-dropdown__menu show" style={{marginLeft:'2em'}}>
         {level.map((level, index) => (
            <button onClick={()=>this.filter('level', level)} className="dropdown-item ygi-dropdown__option" key={index}> {this.camelCase(level)}  </button>
         ))}
        </div>
    )
}
styleMenu = () =>{
    let styleSet = new Set(this.props.classes.map((classes, index) => (
        classes.style[0]
     )))
     let style = [...styleSet]
    
    return (
        <div className="dropdown-menu ygi-dropdown__menu show" >
         {style.map((style, index) => (
            <button onClick={()=>this.filter('style', style)} className="dropdown-item ygi-dropdown__option" key={index}> {this.camelCase(style)} </button>
         ))}
        </div>
    )
}
anatomyMenu = () =>{
    let anatomySet = new Set(this.props.classes.map((classes, index) => (
        classes.anatomical_focus[0]
     )))
     let anatomy = [...anatomySet]
    return (
        <div className="dropdown-menu ygi-dropdown__menu show">
         {anatomy.map((anatomy, index) => (
            <button onClick={()=>this.filter('anatomical_focus', anatomy)} className="dropdown-item ygi-dropdown__option" key={index}> {this.camelCase(anatomy)}  </button>
         ))}
        </div>
    )
}

removeFilter = (data) => {
let filters = this.state.filters
let length
let index = filters.indexOf(data)
let types = this.state.types

filters = filters.filter(filter => 
     filter !== data
)
types = types.filter(type => 
    type !== types[index]
)
for(let i = 0; i < filters.length; i ++){
    this.filter(types[i], filters)
}
this.setState({filters: filters, length: length})
}

showFilters = () =>{
    const {filters} = {...this.state}
    return (
        <div className="row">
         {filters.map((filter, index) => (
            <div key={index} className="col-xs-4 mt-2">

            <div role="button" className="ygi-search-filters__filter" key={index}>
            <label className="ygi-search-filters__filter-label">{this.camelCase(filter)}</label>
            <button className="ygi-search-filters__filter-close" onClick={()=>this.removeFilter(filter)}></button>
            </div>
            </div>
         ))}
        </div>
    )
}
handleChange = (e) =>{
    this.props.search(e.target.value)
}
  render() {
      const {teacherMenu, durationMenu, levelMenu, styleMenu, anatomyMenu, filters} = {...this.state}
    return (
        <React.Fragment>

        <div style={{margin: 'auto'}} className="row container px-3">
        <div className="ygi-search-bar col col-12 col-lg-2"><div className="ygi-search-bar__wrapper">
        <input placeholder="Search" type="text" className="ygi-search-bar__input" onChange={this.handleChange} />
        <a href="/" className="icon-wrapper ygi-search-bar__icon-wrapper">
        <i className="fas fa-search"></i> </a>
        </div></div>
            <div className="col col-12 col-lg-2">
            <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal show'>
        <button className="btn dropdown-toggle ygi-dropdown__placeholder" onClick={()=>this.showMenu('teacherMenu')}>
          Teachers
        </button>
        </div>
        {teacherMenu && this.teacherMenu()}

        </div>
        <div className="col col-12 col-lg-2">
        <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal show'>

        <button className="btn dropdown-toggle ygi-dropdown__placeholder" onClick={()=>this.showMenu('durationMenu')}>
          Duration
        </button>
        </div>
        {durationMenu && this.durationMenu()}

        </div>
        <div className="col col-12 col-lg-2">
        <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal show'>

        <button className="btn dropdown-toggle ygi-dropdown__placeholder" onClick={()=>this.showMenu('levelMenu')}>
          Level
        </button>
        </div>
        {levelMenu && this.levelMenu()}

        </div>
        <div className="col col-12 col-lg-2">
        <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal show'>

        <button className="btn dropdown-toggle ygi-dropdown__placeholder" onClick={()=>this.showMenu('styleMenu')}>
          Style
        </button>
        </div>
        {styleMenu && this.styleMenu()}

        </div>
        <div className="col col-12 col-lg-2">
        <div className='ygi-dropdown__wrapper yi-teacher-dropdown nopadding d-block yi-dropdown--beneath-modal show'>

        <button className="btn dropdown-toggle ygi-dropdown__placeholder" onClick={()=>this.showMenu('anatomyMenu')}>
          Anatomy
        </button>
        </div>
        {anatomyMenu && this.anatomyMenu()}

        </div>
        
        {filters &&
        <div className="ygi-search__wrapper">
        <div className="ygi-search-filters">
           <h2 className="ygi-search-filters__filters-label"> Filters: </h2>
        {this.showFilters()}
        </div>
        </div>

        }
      </div>
      </React.Fragment>
    );
  }
}


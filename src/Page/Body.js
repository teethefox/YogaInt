import React, { Component } from 'react';
import '../App.css';
import Filters from './Filters';

export default class Body extends Component {
    constructor(){
        super() 
          this.state = {
              classes: [],
              results: 0,
              filters:[], 
              type: []
          }
      }
      
      componentDidMount(){
          this.setState({classes: this.props.classes})
      }
  

    filter = (type, data) =>{
        let classes = this.state.classes
        let filters = this.state.filters
        let typeArr = this.state.type
        let length
        let filteredData=[]
        filters = data
        console.log(filters)
        for(let k=0; k < data.length; k ++){
            for(let i = 0; i < classes.length; i++) {
            if(classes[i][type][0] === data[k]) {
                filteredData.push(classes[i])
                }
            }
        }
        if(filters.length < 1){
            length = 0
            }  else{  
                length = filteredData.length
            }
        this.setState({classes: filteredData, results: filteredData.length, filters, type: typeArr})

}
    //searches data by title, duration, and teacher name
    search = (data) =>{
        let classes = this.props.classes
        let filteredData
        let length
        if(data.length < 1){
            filteredData = this.props.classes
            length = 0
        }  else{  
         filteredData = classes.filter(category => {
        return category.title.toLowerCase().includes(data) || category.teacher[0].toLowerCase().includes(data) || category.duration[0].includes(data)
      
            })
            length = filteredData.length
        }
            this.setState({classes: filteredData, results: length})

    }
    remove = (data, type) => {
        // filter function was wonky and ran out of time, so filers are bulk removed for now

            // let classes = this.state.classes
            // let length  
            
            // let filteredData = classes.filter(category => {
            //     return category[type][0] !== data
            // })
            // if(filteredData.length !== 0){
            //     length = filteredData.length
            // }else{
            //     filteredData = this.props.classes
            //     length = 0
            // }
                this.setState({classes: this.props.classes, results: 0})
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
  render() {
      const {classes, results} = {...this.state}
    return (
        <div>
            <h2 className="ygi-page-heading ygi-page-heading--dark"> Online Yoga Classes </h2>
        <Filters 
        classes={this.props.classes} 
        filter={this.filter}
        search={this.search}
        remove={this.remove}
        />
    
        <div className="container">
        <div className="ygi-profile-classes__heading mx-auto text-center">    
        {results > 0 &&
        <div>
        {results} results
        </div>
        }</div>
      <div className="ygi-profile-classes__wrapper" >
     <div className="row">
      {classes.map((item,key) => {
            
               return (
                 <div key={key} className="col-lg-2 col-md-3 col-sm-4">
                <div className="m-2">
                <div className="yi-card-small-centered-hover-wrapper">
                <a className="yi-card-small " href='/'>
                <div className="yi-card-small__image"><img src={item.thumb} alt="Card" /></div>
                  <div className="yi-card-small__content">
                  <h4 className="yi-card-small__title yi-card-small__title--two-line yi-card-small--hover-hide">{item.title}</h4>
                  <div className="yi-card-small__author yi-card-small--hover-hide"> {this.camelCase(item.teacher)}</div>
                  <p className="yi-card-small__snippet mt-1"></p>
                    </div>
                    <div className="yi-card-small__lower-background"></div>
                  <div className="yi-card-small__lower-left"><div><span className="yi-card-small__level">{this.camelCase(item.level)}</span></div></div>
                  <div className="yi-card-small__lower-mid">
                  </div>
                  <div className="yi-card-small__lower-right">
                  <i className="far fa-clock"></i>
                  <span className="yi-card-small__duration"> {this.camelCase(item.duration)} </span>
                  </div>
                 
                  
                   </a>
                   </div>
                    </div>
                    
                    </div>

       )
             
             })}
             </div>
      </div>
      </div>
      </div>
    );
  }
}


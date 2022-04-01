import React from 'react'
import newshub from "./newshub.jpg"
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{border:'0px'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        border:"0px"
                    }
                    }> 
                        <span className="badge rounded-pill" style={{color:'black',backgroundColor:"#f7971e"}}> {source} </span>
                    </div>
                    <img src={!imageUrl ? newshub : imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body " style={{color:'#ccc',backgroundColor:"#101010",border:"0px"}}>
                        <h5 className="card-title"style={{color:'white'}}>{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text" style={{color:'#f90'}}><small>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark container d-flex justify-content-center" style={{color:"white",fontWeight:"500",backgroundColor:"#f90",hover:"f90"}}>Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem

import React from 'react'
import './NewitemSty.css'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
          if(title.length>51) title=title.substr(0,50);
          if(description.length>150)  description=description.substr(0,150);
        return (
            <div className="my-3" >
                <div className="card" style={{backgroundColor:'gray'}}>
                    <div style={{// this is showing source div on image 
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    {/* image shown  */}
                    <img style={{height:'250px',padding:'3px'}} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="img img-fluid" alt="..." />
                    <div className="card-body" style={{height:'24em'}}>
                        <div style={{height:'6em'}}><h4 className="card-title">{title}  </h4></div>
        
                        <p className="card-text">{description}</p>
                        <p> {new Date(date).toGMTString()}</p>
                        <p className="card-text"><small className="text">By {!author ? "Unknown" : author}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}
export default NewsItem
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, src, newsUrl, source, author, publishedDate,mode} = this.props;
    return (
      <div>
        <div className="card" style={{ "width": "18rem","height":"28rem","backgroundColor":mode==='dark'?'#030e36':'white',"color":mode==='dark'?'white':'black'}}>
          <span className={`position-absolute top-0 start-92 translate-middle badge rounded-pill bg-${mode==='dark'?'secondary':'danger'}`}>
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}...</h5>
            <p className="card-text">{description.slice(0,88)}...</p>
            <p className="card-text" ><small  style={{"color":mode==='dark'?'white':'black'}}>By {author} at {new Date(publishedDate).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-${mode==='dark'?'primary':'success'} btn-sm`}
            style={{"position":"absolute","bottom":"18px","left":"15px"}}> Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItem




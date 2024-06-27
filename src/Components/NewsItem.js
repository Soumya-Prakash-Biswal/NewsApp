import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, src, newsUrl, source, author, publishedDate } = this.props;
    return (
      <div>
        <div className="card" style={{ "width": "18rem" }}>
          <span className="position-absolute top-0 start-92 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} at {new Date(publishedDate).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className='btn btn-primary btn-sm'> Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
export default NewsItem




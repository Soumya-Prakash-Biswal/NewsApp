import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import propTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 8
  }
  static propTypes = {
    country: propTypes.string,
    category: propTypes.string,
    pageSize: propTypes.number
  }



  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }

    document.title = `NewsApp-${this.capitalizeFirstChar(this.props.category)}`
  }

  fetchMoreData = () => {
   this.setState({page:this.state.page+1})
   this.UpdateNews();
  };

  UpdateNews = async () => {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d893f11bd844dcb952725b9c484bd31&$page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(30)
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    });
    this.props.setProgress(100)

  }

  capitalizeFirstChar = (String) => {
    return String.charAt(0).toUpperCase() + String.slice(1)
  }
  // handlePreviousClick = async () => {
  //   await this.setState({ page: this.state.page - 1 });
  //   this.UpdateNews();

  // }
  // handleNextClick = async () => {
  //   if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
  //     await this.setState({ page: this.state.page + 1 });
  //     this.UpdateNews();
  //   }
  // }

  async componentDidMount() {
    this.UpdateNews();
  }


  render() {

    return (
      <div className='container my-4  '>
        <h2 className='text-center my-5' style={{color:(this.props.mode)==='dark'?'white':'black'}} >NewsApp-Top {this.capitalizeFirstChar(this.props.category)} Headlines</h2>
        {/* <i>total results Obtained - {this.state.totalResults} , pageNo . {this.state.page}</i> */}
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length<this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row" style={{margin:'10px 45px'}}>
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-2 " key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                mode={this.props.mode}
                description={element.description ? element.description : ""}
                src={element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/shutterstock/photos/1928997539/display_1500/stock-vector-breaking-news-template-with-d-red-and-blue-badge-breaking-news-text-on-dark-blue-with-earth-and-1928997539.jpg"}
                newsUrl={element.url}
                source={element.source.name}
                author={element.author}
                publishedDate={element.publishedAt}
              />
            </div>
          })}
        </div>
        </InfiniteScroll>


        {/* <div className="container d-flex justify-content-between my-2">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-secondary"
            onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div> */}
      </div>
    )
  }
}

export default News

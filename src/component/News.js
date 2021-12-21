import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f3225308707f426883ca061a97377d99&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }
    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f3225308707f426883ca061a97377d99&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f3225308707f426883ca061a97377d99&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>News App- Top Headlines </h2>
                {this.state.loading && <Spinner />}
                <div className="row">


                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} NewsUrl={element.url} />
                        </div>

                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark"
                        onClick={this.handlePrevClick}>&larr; Previous</button>

                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>


        )
    }
}


export default News


import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f3225308707f426883ca061a97377d99";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>News App- Top Headlines </h2>
                <div className="row">


                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} NewsUrl={element.url} />
                        </div>

                    })}
                </div>
            </div>


        )
    }
}


export default News


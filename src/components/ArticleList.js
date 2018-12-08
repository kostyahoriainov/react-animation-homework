import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import articles from '../data/articles.json'
import './ArticleList.css'
import Loading from './Loading';
import Article from './Article';

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        articles: articles.map((item, i) => i === 0? { ...item, isOpened: true } : {...item, isOpened: false})
      })
    }, 3000);
  }

  handleOpen = (id) => {
    this.setState({
      articles: this.state.articles.map(item => item.id === id? {...item, isOpened: !item.isOpened} : {...item, isOpened: false})
    })
  }

  render() {
    const {articles} = this.state
    if (!this.state.articles.length) {
      return (
        <ReactCSSTransitionGroup
          transitionName="opacity"
          transitionAppearTimeout={1500}
          transitionAppear
          transitionLeave={false}
          transitionEnter={false}>
          <Loading/>
        </ReactCSSTransitionGroup>
      )
    }

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppearTimeout={500}>
          {articles.map(item => <Article key={item.id} article={item} handleOpen={() => this.handleOpen(item.id)}/>)}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;

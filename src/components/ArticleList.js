import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import articles from '../data/articles.json'
import Loading from './Loading';
import Article from './Article';
import './ArticleList.css';

export default class ArticleList extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        articles: articles.map((item, i) => i === 0? { ...item, isOpened: true } : {...item, isOpened: false})
      })
    }, 2000);
  }

  handleOpen = (id) => {
    this.setState({
      articles: this.state.articles.map(item => item.id === id? {...item, isOpened: !item.isOpened} : {...item, isOpened: false})
    })
  }

  render() {
    const { articles } = this.state;
    if (!this.state.articles.length) {
      return (
        <CSSTransitionGroup
          component="div"
          transitionName="opacity"
          transitionAppearTimeout={1000}
          transitionAppear
          transitionLeave={false}
          transitionEnter={false}>
          <Loading/>
        </CSSTransitionGroup>
      )
    }

    return (
      <div className="container">
          {articles.map(item => <Article key={item.id} article={item} handleOpen={() => this.handleOpen(item.id)}/>)}
      </div>
    );
  }
}

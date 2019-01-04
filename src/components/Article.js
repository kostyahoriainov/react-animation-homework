import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import './Article.css';


const Article = ({article, handleOpen}) => {
    
    const text = article.isOpened && <article className="card-text">{article.text}</article>;

    return (
        <div className="card mx-auto" style= {{width: '60%'}}>
            <div className="card-header">
                <h3> {article.title} 
                    <button className="btn btn-primary btn-lg float-right" onClick={handleOpen}> {article.isOpened? 'Close' : 'Open'} </button>
                </h3>
            </div>
            <div className="card-body">
                <CSSTransitionGroup
                    className="card-body"
                    component="div"
                    transitionName="text"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {text}
                </CSSTransitionGroup>
            </div>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isOpened: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired,
    handleOpen: PropTypes.func.isRequired
}

export default Article
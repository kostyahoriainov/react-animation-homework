/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types'; 

const Article = ({article, handleOpen}) => {
    

    return (
        <div>
            <span> {article.title} </span>
            <button onClick={handleOpen}> {article.isOpened? 'Close' : 'Open'} </button>
            <p> {article.isOpened ? `${article.text}` : ''} </p>
        </div>
    )

}

Article.propTypes = {
    article: PropTypes.object.isRequired,
    handleOpen: PropTypes.func.isRequired
}

export default Article
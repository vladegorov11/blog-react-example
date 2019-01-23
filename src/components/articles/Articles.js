import React from 'react';
import ArticlesList from './ArticlesList'
const  Articles = ({articles}) =>  {
    return (
      <div className='articles-container'>
        {articles.map(article => {
          return (
            <ArticlesList article={article} key={article.id}/>
          )
        })}
      </div>
    );
}
export default Articles;

import React, { useState } from 'react';
import Articles from './components/Articles';
import 'h8k-components';
import './App.css';

const header = "Sorting Articles";

function App({articles}) {
    const [listOfArticles, setListOfArticles] = useState(articles);
    
    const Dates = () => {
      var articlesNew = [];
      Object.assign(articlesNew, listOfArticles);
      articlesNew.sort((first, second) => {
        const aDate = new Date(first.date);
        const bDate = new Date(second.date);
        if (aDate > bDate) {
          return -1;
        }
        if (aDate < bDate) {
          return 1;
        }
        return 0;
      })

      setListOfArticles(articlesNew);
    }
    const Upvotes = () => {
      var articlesNew = [];
      Object.assign(articlesNew, listOfArticles);
      articlesNew.sort((first, second) => {
        if (first.upvotes > second.upvotes) {
          return -1;
        }
        if (first.upvotes < second.upvotes) {
          return 1;
        }
        return 0;
      })

      setListOfArticles(articlesNew);
    }

    return (
        <div className="App">
            <h8k-navbar header={header}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => Upvotes()}  className="small"data-testid="most-upvoted-link" >Most Upvoted</button>
                <button onClick={() => Dates()}  className="small" data-testid="most-recent-link" >Most Recent</button>
            </div>
            <Articles articles={listOfArticles}/>
        </div>
    );

}

export default App;

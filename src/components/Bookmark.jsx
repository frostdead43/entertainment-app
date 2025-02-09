import { useState, useContext } from "react"
import { PageContext } from './Header';

export default function Bookmark() {
  const { data, getMovie , movie } = useContext(PageContext);
  console.log(movie)
  return(
    <div className="container">
      <div className="bookmarked-movies">
        <h2>Bookmarked Movies</h2>
          {movie.map ( x => (
              <div className="recommend-cards"> 
              <img className="pos-abs" src="/assets/images/empty-bookmark.svg"/> 
          <img className="pos-rel" src={x.image}/>
          <div className="card-detail">
            <h6>{x.release_date}</h6>
            <h6>{x.type}</h6>
            <h6>{x.age_rating}</h6>
          </div>
            <h4>{x.title}</h4>
        </div>
          ))}
      </div>
      <div className="bookmarked-series">
        <h2>Bookmarked Series</h2>
      </div>
    </div>
  )
}
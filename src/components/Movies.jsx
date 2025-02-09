import { PageContext } from './Header';
import { useContext } from 'react';

export default function Movies() {
  const { data, getMovie , movie } = useContext(PageContext);
  
  function handleClick(x) {
    console.log(x);
    getMovie(prevMovie => {
        console.log([...prevMovie, x]);
        return [...prevMovie, x];
        
    });
}

  return(
    <div className="container">
      <div className="recommend-area">
          <h2>Movies</h2>
          <div className="recommend-grid">
              {data.map(x => {
                return (
                (x.type === 'movie' &&
                <div className="recommend-cards"> 
                       <img className="pos-abs" src="/assets/images/empty-bookmark.svg" onClick={() => handleClick(x)}/> 
                  <img className="pos-rel" src={x.image}/>
                  <div className="card-detail">
                    <h6>{x.release_date}</h6>
                    <h6>{x.type}</h6>
                    <h6>{x.age_rating}</h6>
                  </div>
                    <h4>{x.title}</h4>
                </div>
              ))})}
          </div>
      </div>
    </div>
  )
}
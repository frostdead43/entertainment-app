import { PageContext } from './Header';
import { useContext } from 'react';

export default function Series() {
  const { data } = useContext(PageContext);
  
  return(
    <div className="container">
       <div className="recommend-area">
          <h2>Tv Series</h2>
          <div className="recommend-grid">
              
              {data.map(x => {
                return (
                (x.type === 'series' &&
                <div className="recommend-cards"> 
                       <img className="pos-abs" src="/assets/images/empty-bookmark.svg" /> 
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
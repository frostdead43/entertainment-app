import { Fragment, useContext } from "react";
import { PageContext } from './Header';

export default function Home() {
  const { data } = useContext(PageContext);
  console.log(data);

  return (
    <>
      <div className="trending-area">
        <h2>Trending</h2>
        <div className="trending-card">
          {data.map(x => { 
            return (
              x.trending && (
                <div className="w" key={x.id}>
                  <img className="trending-img" src={x.image} alt={x.title} />
                  <div className="info">
                    <div>
                      <h6>{x.release_date}</h6>
                      <h6>{x.type}</h6>
                    </div>
                      <h6>{x.age_rating}</h6>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="recommend-area">
          <h2>Recommended for you</h2>
          <div className="recommend-grid">
              {data.map(x => {
                return (
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
    
              )})}
          </div>
      </div>
    </>
  );
}

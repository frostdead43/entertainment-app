import { useState, useEffect,createContext } from "react"
import Home from "./Home.jsx"
import Movies from "./Movies.jsx"
import Series from "./Series.jsx"
import Bookmark from "./Bookmark.jsx"

export const PageContext = createContext(null);

export default function Header() {
  const [url,setUrl] = useState(location.hash.substring(1) || '' );
  const [data,setData] = useState([]);
  
  const router = [
    {
      url:'/',
      component:<Home />
    },
    {
      url:'/movies',
      component:<Movies />
    },
    {
      url:'/series',
      component:<Series />
  
    },
    {
      url:'/bookmark',
      component:<Bookmark />
    }
  ]

  function getPage(url) {
    return router.findLast(x => url.startsWith(x.url))
  }
  
  
  
  
  useEffect(() => {
    const updateUrl = () => setUrl(location.hash.substring(1));
    window.addEventListener("hashchange", updateUrl);
    
    return () => {
      window.removeEventListener("hashchange", updateUrl);
    };
  }, []);


  useEffect(() => {
    async function getData() {
     const data = await fetch("/assets/data/data.json").then(res => res.json());
     setData(data);
    }
  getData()
  }, []);

  console.log(data);
  const page = getPage(url) || { component: <Home /> };



  return(
    <>
      <header>
        <a href="#/"><img src="./assets/images/logo-icon.svg"/></a>
        <div className="header-tags">
          <a href="#/"><img src="./assets/images/all-content-icon.svg"/></a>
          <a href="#/movies"><img src="./assets/images/movies-icon.svg"/></a>
          <a href="#/series"><img src="./assets/images/tv-series-icon.svg"/></a>
          <a href="#/bookmark"><img src="./assets/images/bookmark-icon.svg"/></a>
        </div>
        <img src="./assets/images/user-icon.svg"/>
      </header>
        <PageContext.Provider value={{url, data}}>
          <input type="text" placeholder="sadsd" />
          {page.component}  
        </PageContext.Provider>
    </>
  )
}
import { useState, useEffect } from "react"
import axios from "axios"

export function ArticlesIndex() {
  const [articles, setArticles] = useState([])

  const getNews = () =>  {
    console.log("got that news")
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${import.meta.env.VITE_API_KEY}`).then(response => {
      console.log(response.data)
      setArticles(response.data.articles)
    })
  }

  useEffect(getNews, [])
  
  return (
    <div>
      <h1>Headlines</h1>
      {articles.map(article =>(
        <div key={article.id}>
          <p>{article.title}</p>
        </div>
      ))}
    </div>
  )
}
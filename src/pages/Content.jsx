import React, { useEffect, useState } from "react";
import Img from "./assets/poster2.jpg";
import "./content.css";

function Content() {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const apiUrl = "https://test.create.diagnal.com/data/page1.json";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.response.results);
        // Assuming the response data is in the structure you provided
        const results = data.page["content-items"].content;
        console.log(results);

        const articleData = results.map((article) => article);
        setArticleData(articleData);
        console.log(articleData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {articleData &&
        articleData.map((article, index) => (
          <div className="movie_item" key={index}>
            <div className="article_category_container">
              <div className="movie_img">
                <img src={Img} alt="movie-poster" />
              </div>

              <h1>{article.name}</h1>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Content;

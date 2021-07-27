import { useState, useEffect, createContext } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch(
        "https://dev.to/api/articles?username=vivekalhat"
      );
      return await res.json();
    };

    getArticles().then((data) => setArticles(data));
  }, []);

  return (
    <ArticleContext.Provider value={articles}>
      {props.children}
    </ArticleContext.Provider>
  );
};

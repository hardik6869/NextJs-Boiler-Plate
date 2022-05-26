import articleStyles from "../styles/Article.module.css";
import ArticlesItem from "./ArticlesItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, index) => (
        <ArticlesItem article={article} key={index} />
      ))}
    </div>
  );
};

export default ArticleList;

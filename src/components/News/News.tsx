import s from "./News.module.css";
import Card from "./Card/Card";

export const News = () => {
  const countOfNews = 9;

  const renderNewsCard = (Component: JSX.Element, count: number) => {
    const news = [];
    for (let i = 0; i < count; i++) {
      news.push(Component);
    }
    return news;
  };
  return <div className={s.news}>{renderNewsCard(<Card />, countOfNews)}</div>;
};

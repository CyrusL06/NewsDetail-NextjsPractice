import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({params}){
    // holds the key for every id slugs
    const newsSlug = params.slug
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

    return(
        <article className= "news-article">
        <header>
            <img 
            src ={`/images/news/${newsItem.image}`}
            alt = {newsItem.title}
            />
            <time dateTime = {newsItem.date}>{newsItem.date}</time>
            <h1>{newsItem.title}</h1>
        </header>
        <p>{newsItem.content}</p>
        </article>
    );
}
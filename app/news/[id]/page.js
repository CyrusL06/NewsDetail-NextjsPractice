
export default function NewsDetailPage({params}){
    // holds the key for every id slugs
    const newsId = params.id

    return(
        <>
         <h1>News Detail Page</h1>
         <p>{newsId}</p>
        </>
    );
}
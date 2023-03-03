import SearchResults from "@/components/SearchResults";
import { ISearchResult } from "@/interfaces/searchResult";


export default async function Home({ searchParams } : { searchParams?: { genre: string | string[] | undefined } }) {
  const genre = searchParams&&searchParams.genre || "fetchTrending"
  
  let cat
  switch (genre) {
    case "fetchTrending":
      cat = "electronics"
      break;
    case "fetchTopRated":
      cat = "jewelery"
      break;
  
    default:
      break;
  }

  if (cat) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`, {next: {revalidate: 106969}})
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const results:ISearchResult[] = await res.json()
    
    return (
      <>
        <SearchResults results={results} />
      </>
    )
  } else {
    return (
      <h1>Sorry, but search parameter is incorrect</h1>
    )
  }
  
  
}

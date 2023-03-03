import { ISearchResult } from "@/interfaces/searchResult"
import Image from "next/image";

interface SearchResultsProps {
  results: ISearchResult[]
}

export default function SearchResults({ results }:SearchResultsProps) {

  console.log(results);
  
  const a = results.map(movie => 
  <ul 
    className="
     border-4 border-amber-700 
    "  
    key={movie.id}>
      <div className="w-[150px] h-[220px] relative " >
        <Image src={movie.image} alt={movie.title} fill sizes=" 100vw" />
      </div>
  </ul>)
  return (
    <li className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center " >
      {a}
    </li>
  )
}

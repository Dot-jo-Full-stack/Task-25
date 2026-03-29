import Link from "next/link";
export const metadata={
  title: "Home - Blog",
  description:"Welcome to blog app"
}
export default async function Home() {
 

  const res = await fetch
    (`https://jsonplaceholder.typicode.com/posts?_limit=15`,{cache:"no-store"})
  const data = await res.json();

  return (
    <div className="container mt-5">
      <div className="row">
      {data.map((elem) => {
        return (
          <div key={elem.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow border-0 rounded">
              <div className="card-body d-flex flex-column">
            <h4 className="card-title fw-bold text-dark">{elem.title}</h4>
              <Link className="text-decoration-none text-dark" href={`/details/${elem.id}`}>
                <p>{elem.body.slice(0, 100)}... </p>
              </Link>
              </div>
            </div>
          
            </div>
            
        );
        
      })}
     </div>
    </div>
    
  );
}

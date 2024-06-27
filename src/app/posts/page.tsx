"use client"
import Link from "next/link";
interface Post {
    id: number,
    title:string,
    body:string
}
const Posts = async () =>  {

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!res.ok) {
            throw new Error;
        }
        return await res.json();
    }

    const posts = await getData();

    return (
      <main>
          {posts.map(({id, title, body}:Post) => {
            return (
                <Link key={id} className="post" href={`/posts/${id}`}>
                    <h2>{title}</h2>
                    <h5>{body}</h5>
                </Link>
            )
          })}
      </main>
    );
  }
  
  export default Posts;
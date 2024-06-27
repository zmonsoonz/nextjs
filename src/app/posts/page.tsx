import Link from "next/link";
import styles from "./Posts.module.scss";

interface Post {
    id: number,
    title:string,
    body:string
}

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res.ok) {
        throw new Error;
    }

    const data = await res.json();
    return data
}

const Posts = async () =>  {

    const posts = await getData();

    return (
      <main className={styles.main}>
          {posts.map(({id, title, body}:Post) => {
            return (
                <Link key={id} className={styles.post} href={`/posts/${id}`}>
                    <h2>{title}</h2>
                    <h5>{body}</h5>
                </Link>
            )
          })}
      </main>
    );
  }
  
  export default Posts;
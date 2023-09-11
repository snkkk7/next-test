import { Metadata } from "next"
import Link from "next/link"

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate:60
        }
    })

    if(!response.ok){
        throw new Error('Unable to fetch posts!')
    }

    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog',
  }

export default async function Blog(){

    const posts = await getData()
    console.log(posts)
    return (
            <div>
                <h1>Рецепты!</h1>
                <ul>
                    {
                    posts.map((post:any) => (
                                            <li key={post.id}>
                                                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                            </li>
                                            )
                             )
                    }
                </ul>
            </div>
           )
}
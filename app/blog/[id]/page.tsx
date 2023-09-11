import { Metadata } from "next";

type Props = {
    params:{
        id:string
    }
}

async function getData(id:string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    next:{
          revalidate:60
         }
    })

  return response.json()
}

// export async function generateMetaData({ params:{ id } }: Props ):Promise<Metadata>{
//   return {
//     title:id,
//   };
// }

export default async function Post({ params:{ id } }: Props ) {

  const response = await getData(id)

    return (
      <>
        <h1>Рецепт Номер {id}</h1>
        <div>
          {response.body}
        </div>
      </>
    )
}
  
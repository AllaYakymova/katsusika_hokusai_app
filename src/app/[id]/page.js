import {getArticleById} from "@/utils";
import Image from "next/image";

export default async function ArticlePage({params}) {
  const {id} = params

  const article = await getArticleById(id)

  return (
    <div>
      <div
        style={{
          marginTop: '20px',
          position: 'relative',
          width: '100%',
          height: '500px'
        }}
      >
        <Image
          src={`/images/arts/${article.img}`}
          alt={article.name}
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      <div className='article_container'>
        <h1>{article.name}</h1>
        <div dangerouslySetInnerHTML={{__html: article.content}}></div>
      </div>
    </div>
  )
}

// prerender article pages html

// export async function generateStaticParams() {
//   const articles = await fetch(`${process.env.JSON_API}/articles`)
//     .then(res => res.json())
//
//
//   return articles.map(art => ({id: String(art.id)}))
// }
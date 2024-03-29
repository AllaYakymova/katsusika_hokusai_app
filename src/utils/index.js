
export async function getArticles() {
  try {
    const getArticles = await fetch(`${process.env.JSON_API}/articles`)
    const articles = await getArticles.json()

    if(!Object.keys(articles).length) {
      throw new Error('Couldn\'t be found any articles')
    }

    return articles
  } catch (e) {
    throw new Error(e.message)
  }
}

export async function getArticleById (id) {
  try {
    const getArticle = await fetch(`${process.env.JSON_API}/articles/${id}`)
    const article = await getArticle.json()

    if(!Object.keys(article).length) {
      throw new Error('Couldn\'t be found the article')
    }

    return article
  } catch (e) {
    throw new Error(e.message)
  }
}
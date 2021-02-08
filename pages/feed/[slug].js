import styles from '../../styles/Feed.module.css'
import { useRouter } from 'next/router'

// path: /feed/1
const Feed = ({ pageNumber, articles }) => {
  const router = useRouter()

  const onPrePageClick = () => {
    if (pageNumber > 1) {
      router.push(`/feed/${pageNumber - 1}`)
    }
  }

  const onNextPageClick = () => {
    if (pageNumber < 5) {
      router.push(`/feed/${pageNumber + 1}`)
    }
  }

  return (
    <div>
      {/* News */}
      <div className={styles.main}>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <a href={article.url} target="_blank"><h1>{article.title}</h1></a>

            <p>{article.description}</p>

            {!!article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div>

      {/* paginator */}

      <div className={styles.paginator}>
        <div onClick={onPrePageClick} className={pageNumber == 1 ? styles.disabled : styles.active}>
          Previous Page
        </div>

        <div>{`Page ${pageNumber}`}</div>

        <div onClick={onNextPageClick} className={pageNumber ==5 ? styles.disabled : styles.active}>
          Next Page
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1
      }
    }
  }

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
      }
    }
  )
  const data = await response.json()

  return {
    props: {
      articles: data.articles,
      pageNumber: Number.parseInt(pageNumber)
    }
  }
}

export default Feed

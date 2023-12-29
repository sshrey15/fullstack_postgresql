import Image from 'next/image'
import styles from './page.module.css'
import prisma from '../lib/prisma'
import Post from './components/posts'
import Link from 'next/link'


async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
       author: {
          select: { name: true },
       }
      },
  })
  await prisma.$disconnect(); // Disconnect from the database
  return posts
}

export default async  function Home() {
  const posts = await getPosts()
 


  return (
    <main className={styles.main}>
      <Link style={{
        margin: '0 auto',
        maxWidth: 768,
        padding: '0 16px',
        textDecoration: 'none',
        color: 'blue',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        
      }} href={'/add-post'}>
        add post
      </Link>
      <h1>Feed</h1>
      {
        posts.map((post) => {
            return (
             <Post
              style={{
                margin: '0 auto',
                maxWidth: 768,
                padding: '0 16px',
              
              }}
              key={post.id}
              id = {post.id}
              title = {post.title}
              content = {post.content}
              authorName = {post.author.name}
              
             />
            )
        })
      }
    </main>
  )
}

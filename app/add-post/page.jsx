"use client"
import styles from '@/app/page.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddPost(){
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
        await fetch('/api/add-post', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content}) })
            
        router.refresh()
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
  };

    return (
        <main className={styles.main}>
        <Link href={'/'}>View Feed
            </Link>
            {/* shrey */}
            
        <h1>Add Post</h1>
      
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30vw'

        }} onSubmit={handleSubmit}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px'
        
        }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px'
        
        
        }}>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
          />
        </div>
        <button  style={{
            width: '100px',
            alignSelf: 'flex-end',
            color: 'white',
        }}type="submit">Submit</button>
      </form>
    </main>
    )
}
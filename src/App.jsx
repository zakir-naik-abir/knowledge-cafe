import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Booksmarks/Booksmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setRestingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setRestingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Booksmarks readingTime={readingTime} bookmarks={bookmarks}></Booksmarks>
      </div>
    </>
  )
}

export default App;

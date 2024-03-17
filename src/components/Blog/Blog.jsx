import { FaRegBookmark  } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  
  const {title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;
  return (
    <div className="mb-16 space-y-4">
      <img className="w-full mb-8 rounded-xl" src={cover} alt={`Cover picture of the title ${title}`} />
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <img className="w-[70px] h-[70px] rounded-full m-auto" src={author_img} alt={`Author image of ${title}`} />
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <p>{reading_time} min read</p>
          <button onClick={() => handleAddToBookmark(blog)} className='my-auto text-2xl'><FaRegBookmark ></FaRegBookmark></button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
        }
      </p>
      <button onClick={() =>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark as Read</button>
    </div>
  )
}

export default Blog;
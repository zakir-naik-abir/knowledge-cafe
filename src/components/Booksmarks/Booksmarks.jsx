import Bookmark from "../Bookmark/Bookmark";

const Booksmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 text-center bg-gray-200 ml-2 p-4 rounded-lg">
      <div>
        <h3>Reading Time: {readingTime}</h3>
      </div>
      <h3>Bookmarked Blogs: {bookmarks.length}</h3>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}

export default Booksmarks;
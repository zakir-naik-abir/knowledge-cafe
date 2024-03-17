import profile from '../../assets/images/logo.jpg'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 border-b-2  text-3xl font-semibold md:flex max-w-7xl mx-auto mb-4'>
      <h1 className='text-4xl '>Knowledge Cafe</h1>
      <img className='w-20 h-20 rounded-full' src={profile} alt="" />
    </header>
  )
}

export default Header;
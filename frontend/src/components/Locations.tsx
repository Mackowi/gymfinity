import photo from '../assets/photos/interior.jpg'

function Locations() {
  return (
    <div className='container mx-auto p-8 pb-16 flex lg:justify-center md:space-x-28 '>
      <div className='flex flex-col w-1/2  lg:w-1/4'>
        <div className='flex flex-col text-2xl md:text-3xl font-bold tracking-wider mb-12'>
          <p>MORE LOCATIONS</p>
          <p>MORE BUZZ</p>
        </div>
        <div className='flex flex-col text-4xl md:text-5xl font-bold space-y-2 '>
          <div>
            <a href='' className='locationsLink'>
              AMSTERDAM
            </a>
          </div>
          <div>
            <a href='' className='locationsLink'>
              ROTTERDAM
            </a>
          </div>
          <div>
            <a href='' className='locationsLink'>
              UTRECHT
            </a>
          </div>
        </div>
      </div>
      <div className=' md:w-1/2 hidden lg:block'>
        <img src={photo} alt='interior photo' className='mt-32 rounded-lg' />
      </div>
    </div>
  )
}
export default Locations

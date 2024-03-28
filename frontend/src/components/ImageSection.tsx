import pic from '../assets/photos/snatch2.jpg'

function ImageSection() {
  return (
    <div className='h-[36rem] relative'>
      <img
        src={pic}
        alt='workout picture'
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 text-white bg-black/[.20] flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start justify-start mt-10 md:mt-20 md:justify-center  lg:mt-[5%]'>
        <button className='heroBtn font-bold'>LATEST NEWS</button>
        <button className='heroBtn font-bold'>STUDENT MEMBERSHIP</button>
      </div>
    </div>
  )
}
export default ImageSection

import pic1 from '../assets/photos/squat.jpg'
import pic2 from '../assets/photos/pushup.jpg'

function TwoImages() {
  return (
    <div className='container mx-auto p-8 py-16 flex flex-col md:flex-row items-center md:items-start gap-16'>
      <div className='w-full md:w-1/2 flex flex-col items-center gap-12 md:gap-12'>
        <h2 className='text-2xl md:text-3xl font-bold tracking-wider w-60 text-center md:text-left'>
          OUR LATEST BLOG POSTS
        </h2>
        <div className='w-full md:w-1/2 flex flex-col  cursor-pointer'>
          <img
            src={pic1}
            alt='squatting man'
            className='md:h-full hover:shadow-2xl hover:shadow-black/50 mb-6 rounded-lg object-cover'
          />
          <p className='text-xl'>SQUAT MONDAY</p>
          <small>21.03.2024</small>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center mt-8'>
        <div className='w-full md:w-1/2 flex flex-col cursor-pointer'>
          <img
            src={pic2}
            alt='woman training'
            className='hover:shadow-2xl hover:shadow-black/50 mb-6 rounded-lg object-cover'
          />
          <p className='text-xl'>PUSH UP CHALLANGE</p>
          <small>15.03.2024</small>
        </div>
      </div>
    </div>
  )
}
export default TwoImages

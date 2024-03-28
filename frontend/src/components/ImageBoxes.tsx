import pic1 from '../assets/photos/snatch.jpg'
import pic2 from '../assets/photos/ropes.jpg'
import pic3 from '../assets/photos/fitness.jpg'

function ImageBoxes() {
  return (
    <div className='mx-auto  pb-16 relative'>
      <div className='hidden lg:flex absolute bottom-[40%] left-0 h-10 w-full bg-reddish  items-center'>
        <div className='flex gap-16 w-full justify-around animation-slide-brandname'>
          <p className='text-white font-bold tracking-widest'>GYMFINITY</p>
          <p className='text-white font-bold tracking-widest'>JOIN US TODAY!</p>
          <p className='text-white font-bold tracking-widest'>GYMFINITY</p>
          <p className='text-white font-bold tracking-widest'>JOIN US TODAY!</p>
          <p className='text-white font-bold tracking-widest'>GYMFINITY</p>
          <p className='text-white font-bold tracking-widest'>JOIN US TODAY</p>
        </div>
      </div>
      <div className='lg:hidden absolute bottom-1/4 left-[45%] h-1/2 w-12 bg-reddish'></div>
      <div className='container p-8 mx-auto'>
        <div className='flex flex-col text-2xl md:text-3xl font-bold tracking-wider mb-8 lg:mb-16'>
          <p>MORE POSSIBILITES</p>
          <p>MORE POTENTIAL</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16'>
          <div className='group imgContainer'>
            <img
              src={pic1}
              alt='gym picture 1'
              className='rounded-lg group-hover:scale-110 w-full'
            />
            <div className='imgOverlay'></div>
            <h4 className='imgText'>EXPLORE PERSONAL TRAINING</h4>
          </div>
          <div className='group imgContainer'>
            <img
              src={pic2}
              alt='gym picture 2'
              className='rounded-lg group-hover:scale-110 w-full'
            />
            <div className='imgOverlay'></div>
            <h4 className='imgText'>BRING A FRIEND</h4>
          </div>
          <div className='group imgContainer'>
            <img
              src={pic3}
              alt='gym picture 3'
              className='rounded-lg group-hover:scale-110 w-full'
            />
            <div className='imgOverlay'></div>
            <h4 className='imgText'>BOOK OUR CLASSES</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageBoxes

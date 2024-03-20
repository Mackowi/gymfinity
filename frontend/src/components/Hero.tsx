import videoFile from '../assets/gym.mp4'

function Hero() {
  return (
    <section>
      <div className='h-screen '>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src={videoFile} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='bg-black/[.30] absolute inset-0 text-white font-bold flex flex-col justify-center items-center px-8 z-2'>
          <h1 className='text-4xl md:text-5xl tracking-wider'>
            GET UP TO 25% OFF
          </h1>
          <div className='text-xl text-center flex flex-col md:flex-row space-x-2 mt-4'>
            <p>Receive up to 50% discount on your gym membership now.</p>
            <a href='/page' className='underline'>
              Check more information here.
            </a>
          </div>
          <div className='mt-12 text-white gap-6 flex flex-col md:flex-row'>
            <button className='heroBtn'>JOIN NOW</button>
            <button className='heroBtn'>FREE TRIAL</button>
            <button className='heroBtn'>MEMBERSHIPS</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero

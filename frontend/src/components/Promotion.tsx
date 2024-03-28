function Promotion() {
  return (
    <div className='relative bg-white py-36'>
      <h1 className='absolute text-10xl top-10 font-logo  text-nowrap tracking-wider animation-slide'>
        GET DISCOUNT FOR EACH WORKOUT
      </h1>
      <div className='flex justify-center items-center relative'>
        <button className='absolute z-10 text-white flex font-bold gap-4 accentBtn'>
          GET €1,- OFF
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
          </svg>
        </button>
      </div>
    </div>
  )
}
export default Promotion

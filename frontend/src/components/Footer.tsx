import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import tiktok from '../assets/icons/tiktok.svg'
import x from '../assets/icons/x.svg'
import youtube from '../assets/icons/youtube.svg'

function Footer() {
  return (
    <div className='bg-black'>
      <div className='text-white w-full p-8 pt-16 space-y-12 md:container mx-auto text-xs'>
        <h1 className='font-logo text-3xl mb-12 md:mb-16 '>GYMFINITY</h1>
        <div className='flex flex-col md:flex-row justify-between uppercase space-y-12  md:space-y-0'>
          <div className='flex flex-col md:w-1/4 space-y-2'>
            <p className='text-xl font-bold tracking-widest mb-4'>Clubs</p>
            <div>
              <a href='' className='footerLink'>
                Amsterdam
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                Utrecht
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                Rotterdam
              </a>
            </div>
          </div>
          <div className='flex flex-col md:w-1/4 space-y-2'>
            <p className='text-xl font-bold tracking-widest mb-4'>Go To</p>
            <div>
              <a href='' className='footerLink'>
                Work at Trainmore
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                Personal Training
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                News & More
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                Student Membership
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                Bring a friend
              </a>
            </div>
          </div>
          <div className='flex flex-col md:w-1/4 space-y-2 '>
            <p className='text-xl font-bold tracking-widest mb-4 '>Contact</p>
            <div>
              <a href='' className='footerLink'>
                Get in Touch
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                FAQ
              </a>
            </div>
            <div>
              <a href='' className='footerLink'>
                Cancel membership
              </a>
            </div>
          </div>
          <div className='flex flex-col items-start md:w-1/4 md:items-center'>
            <div className='flex flex-col'>
              <p className='text-xl font-bold tracking-wide mb-4'>
                Stay up to Date
              </p>
              <div className='flex mb-12 space-x-5'>
                <a href=''>
                  <img src={facebook} alt='facebook' className='footerSocial' />
                </a>
                <a href=''>
                  <img
                    src={instagram}
                    alt='instagram'
                    className='footerSocial'
                  />
                </a>
                <a href=''>
                  <img src={tiktok} alt='tiktok' className='footerSocial' />
                </a>
                <a href=''>
                  <img src={x} alt='x' className='footerSocial' />
                </a>
                <a href=''>
                  <img src={youtube} alt='youtube' className='footerSocial' />
                </a>
              </div>
              <button className='uppercase  px-8 border-4 border-white rounded-lg p-2 font-bold hover:bg-white hover:text-black hover:shadow-xl hover:shadow-white/15 hover:scale-105 transition duration-200'>
                Get Our Newsletter
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-6 text-gray-500/75 uppercase text-xs justify-center'>
          <a
            href=''
            className='font-bold hover:text-white transition duration-200'
          >
            Cookie Policy
          </a>
          <a
            href=''
            className='font-bold hover:text-white transition duration-200'
          >
            Terms And Conditions
          </a>
          <a
            href=''
            className='font-bold hover:text-white transition duration-200'
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer

import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className=' w-full h-[400px] object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/508181ba-f697-4ca8-9017-0d6a48cbd731/KG-ru-20230313-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
    </div>
    </div>
    <SavedShows />
    </>
  )
}

export default Account
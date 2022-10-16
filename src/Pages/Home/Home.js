import React from 'react'

const Home = () => {
  return (
    <section>
      <div className="home custom-grid flex flex-col-reverse md:flex-row justify-between items-center mt-8 ">
        <div className='w-full md:w-1/2'>
          <h6 className='text-sm sm:text-base md:text-xl'><em>Are you hungry</em></h6>
          <h2 className='text-xl xl:text-5xl font-semibold mb-4'>Don't wait !</h2>
          <button className='px-6 py-2 bg-yellow-500 text-white rounded-full'>Order Now</button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center mb-8 md:block md:mb-0'>
          <img className='w-4/5' src="https://raw.githubusercontent.com/Tusar78/react-cart/main/public/images/pizza.png" alt="Pizza" />
        </div>
      </div>
    </section>
  )
}

export default Home
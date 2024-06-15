import React from 'react'

function Navbar() {
  return (
    <React.Fragment>
        <nav className='w-full flex justify-between items-center p-4 pr-16 bg-gray-100'>
            <div>
                <p>Bite Speed</p>
            </div>
            <div className=' border border-sky-500 rounded  p-1 px-2 bg-white'>
                <button className='btn rounded-sm text-sm text-sky-800 font-bold'>Save Changes</button>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar

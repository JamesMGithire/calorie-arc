import React from 'react'
import Button from '../Elements/Button/Index';

const UserProfile = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between" >
        <div className="banner-description w-full md:w-1/2 p-3">
            <h2 className="mb-6 text-4xl font-bold text-black">
            CUISINES
            </h2>
            <p className="font-semibold text-lg text-red-600 py-2">
              Choose a cuisine
              </p>
              <div className="btn-container">
                <Button>
                  Choose Here
                </Button>
                <a href="/cuisines" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                  See Cuisines
                </a>
              </div>
        </div>
        <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
          <img src= "https://media.istockphoto.com/photos/delicious-meal-on-a-black-plate-top-view-copy-space-picture-id1165399909?b=1&k=20&m=1165399909&s=170667a&w=0&h=Avt2tZq-dpx4w602UqZJuk7Sog9S4-TfD7V0GwBVu6M=" alt="banner" className='max-h-95'/>
        </div>
    </div>
  )
}
export default UserProfile;
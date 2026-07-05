import React from 'react'
import ButtonList from './ButtonList'
import VideosContainer from './VideosContainer'

const MainContainer = () => {
  const categories = ["All","Music","Mixes","Podcasts","Recruitment","Data Structures","APIs","Telugu Cinema","Live","Entrepenureship","Website","wealth"]
  return (
    <div className='col-span-11 px-5 py-3'>
      <div className='flex gap-2 ml-32'>
        {
          categories.map((name) =>     <ButtonList key={name} name={name}/> )
        }
      </div>
        <VideosContainer/>
    </div>
  )
}

export default MainContainer
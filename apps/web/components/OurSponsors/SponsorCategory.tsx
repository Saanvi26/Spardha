import React from 'react'
import SponsorCard from './SponsorCard'

interface SponsorData{
  imageUrl: string,
  name: string,
  targetUrl: string,
}

const SponsorCategory = ({ category, sponsors }: { category: string, sponsors: SponsorData[] }): JSX.Element => {
  //const nums = new Array(sponsors).fill(0) // never need to reassign this array, so it's fine to use const

  return (
    <div className={`flex flex-col items-center gap-2 category md:m-0 m-2`}>
      <div className='md:text-2xl text-xl text-center'>{category}</div>
      <div className='flex justify-evenly w-5/6 flex-wrap h-fit gap-3 '>
        {sponsors.map((item: SponsorData,index:number) => {
          return(
            <SponsorCard key={index} len={sponsors.length} sponsor={item} />
          );
        })}
      </div>
    </div>
  )
}

export default SponsorCategory

// {
//   nums.map((i: number | undefined) => {
//     return (
//       <SponsorCard key={i} len={sponsors} />
//     )
//   })
// }
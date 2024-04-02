import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const refVar = useRef(null)
    const data = [
        {
            desc: "lorem ipsum dolor sit amet consecconces yea.",
            mbData: "6.1",
            download: true,
            tag: {
                exist: true,
                color: 'blue',
                contain: true
            },
        },
        {
            desc: "lorem ipsum dolor sit amet consecconces yea.",
            mbData: "0.8",
            download: false,
            tag: {
                exist: true,
                color: 'green',
                contain: false
            },
        },
        {
            desc: "lorem ipsum dolor sit amet consecconces yea.",
            mbData: "6.1",
            download: true,
            tag: {
                exist: true,
                color: 'blue',
                contain: true
            },
        },
        {
            desc: "lorem ipsum dolor sit amet consecconces yea.",
            mbData: "0.8",
            download: false,
            tag: {
                exist: true,
                color: 'green',
                contain: false
            },
        },
    ]
  return (
    <>
        <div ref={refVar} className='fixed top-0 left-0 w-full h-full p-10 z-[3] flex flex-wrap gap-5'>
        {data.map((item, index)=>(
            <Card key={index} data={item} reference={refVar}/>
        ))}
        </div>
    </>
  )
}

export default Foreground
import React from 'react'

const Background = () => {
    return (
        <>
            <div className=' fixed z-[2] h-screen w-full'>
            {/* <nav className='w-full py-10 absolute top-[2%] flex justify-center font-semibold text-zinc-300 text-xl'>Documents.</nav> */}
            <h1 className=" absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-zinc-600 font-semibold uppercase">
                Docs.
            </h1>
            </div>
        </>
    )
}

export default Background
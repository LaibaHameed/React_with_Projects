import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { ImCancelCircle } from "react-icons/im";

const Card = ({ data, reference }) => {
    return (
        <>
            <motion.div drag dragConstraints={reference} whileHover={{
                scale: 1.1,
                transition: { duration: 0.6 },
            }} dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[20px] text-zinc-100 py-10 px-8 overflow-hidden'>
                <FaRegFileAlt />
                <p className=' text-sm font-semibold leading-tight mt-5'> {data.desc} </p>
                <div className='footer absolute bottom-0 w-full left-0'>
                    <div className='flex items-center justify-between mb-3 py-3 px-8'>
                        <h5>{data.mbData} MB</h5>
                        <span className='flex items-center justify-center h-7 w-7 bg-zinc-600 rounded-full'>
                            {data.download ? <LuDownload size='0.8em' /> : <ImCancelCircle />}
                        </span>
                    </div>
                    {data.tag.exist && <div className={`tag w-full py-4 ${data.tag.color == "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center items-center`}>
                        {data.tag.contain ? <h3 className=' font-semibold text-sm'>Download Now...</h3> : <progress className='h-1 my-2' value="32" max="100"> </progress>}
                    </div>}
                </div>
            </motion.div>
        </>
    )
}

export default Card
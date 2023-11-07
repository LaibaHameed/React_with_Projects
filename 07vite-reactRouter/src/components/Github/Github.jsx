import React, { useEffect, useState } from 'react'
import "./Github.css"
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/LaibaHameed')
    //   .then(Response => Response.json())
    //   .then(data => setData(data));
    // }, [])

    const data = useLoaderData();
    
  return (
    <>
        <div className='git'>Github Followers :  {data.followers}
        <br></br>
        <img src={data.avatar_url} alt='git Pic' width={300}></img>
        </div>
    </>
  )
}

export default Github

export const GithubInfoLoader = async () =>{
const Response = await fetch('https://api.github.com/users/LaibaHameed');
return Response.json();
}
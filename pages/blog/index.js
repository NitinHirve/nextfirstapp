import React from 'react'
import Navbar from '../../components/Navbar'

export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("data : ",data);
    return {
      props :{
        data,
      }
    }
}

const Blog = ({data}) => {
    return (
        <>
            <Navbar />
            <h1>This are nice Blogs !!</h1>
            {data.map(curElement=>(
                <div style={{marginBotton:"10px"}}>
                    <p>{curElement.id}</p>
                    <p>{curElement.title}</p>
                </div>
            ))}
        </>
    )
}

export default Blog
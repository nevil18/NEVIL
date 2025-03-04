import React from 'react'
import React, { useState,useEffect } from 'react'

const Datafecher = () => {
    const[data,setdata]=useState([]);
    const[loading,setloading]=useState(true);

    useEffect(() => {    
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json)
      .then(data=>{
        setdata(data);
        setloading(false);
      });
    }, []);
    
  return (
    <div>
        {loading ? (
            <h1>loading....</h1>
        ):(
            <ul>
            {
                data.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }
            </ul>
        )}
    </div>
  )
}

export default Datafecher
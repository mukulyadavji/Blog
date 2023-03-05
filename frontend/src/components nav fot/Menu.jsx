import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({cat}) => {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[cat]);


  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     img: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     img: "https://images.pexels.com/photos/1047319/pexels-photo-1047319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     img: "https://images.pexels.com/photos/35888/amazing-beautiful-breathtaking-clouds.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  //     img: "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  
  return (
    <div className="menu">
      <h1>May be you like this</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

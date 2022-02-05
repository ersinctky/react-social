import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from 'axios';
import { myApi } from "../../api/myApi";


export default function Feed() {
  
 const [posts,setPosts]=useState([])

 useEffect(() => {

  const fetchPosts = async ()=>{
    const res = await  myApi.get("/posts/timeline/61fbe1aedf59c5a95a42d987")
    setPosts(res.data)
    console.log(res);
  }
  fetchPosts()
  console.log("first");

  
 }, []);
 

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}

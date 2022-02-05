import { useState,useEffect } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { myApi } from "../../api/myApi";


export default function Feed({username}) {
  
 const [posts,setPosts]=useState([])

 useEffect(() => {

  const fetchPosts = async ()=>{
    const res = username ? await  myApi.get("/posts/profile/"+ username) : await  myApi.get("/posts/timeline/61fbe1aedf59c5a95a42d987")
    setPosts(res.data)
  }
  fetchPosts()

  
 }, [username]);
 

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

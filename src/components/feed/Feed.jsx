import { useState,useEffect, useContext } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { myApi } from "../../api/myApi";
import { AuthContext } from "../../context/AuthContext";


export default function Feed({username}) {
  
 const [posts,setPosts]=useState([])
 const { user } = useContext(AuthContext);

 useEffect(() => {

  const fetchPosts = async ()=>{
    const res = username ? await  myApi.get("/posts/profile/"+ username) : await  myApi.get("/posts/timeline/"+user._id)
    setPosts(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
  }
  fetchPosts()

  
 }, [username,user]);
 

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username === user.username && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}

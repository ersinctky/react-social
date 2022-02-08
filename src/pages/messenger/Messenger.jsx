import React from "react"
import Conversation from "../../components/conversations/Conversation";
import Topbar from "../../components/topbar/Topbar";
import "./messenger.css";

export default function Messenger() {
  return (
      <>
      <Topbar />
      <div className="messenger">
       <div className="chatMenu">
           <div className="chatMenuWrapper">
           <input placeholder="Search for friends" className="chatMenuInput" />
           <Conversation />
           </div>
       </div>
       <div className="chatBox">
           <div className="chatBoxWrapper"></div>
       </div>
       <div className="chatOnline">
           <div className="chatOnlineWrapper"></div>
       </div>
      </div>;
      </>
  )
  
}

import React from "react";
import ReactPlayer from "react-player";

export default function PostItem({ post }) {
  return (
    <div className="list-item">
      <div className="item-video">
        <ReactPlayer url={post.url} controls />
      </div>
      <div className="title-item">
        <p>{post.title}</p>
      </div>
      <div className="desc-item">{post.description}</div>
    </div>
  );
}

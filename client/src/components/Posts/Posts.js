<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Button, Spin } from "antd";
import AddModal from "../AddModal/AddModal";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/subject/actions";
import PostItem from "../PostItem/PostItem";

const { getAllPost, addNewPost } = actions;

export default function Posts() {
  const [open, setOpen] = useState(false);
  const { posts, loading } = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  function request() {
    dispatch(getAllPost());
  }
  useEffect(() => {
    request();
  }, []);
  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = (data) => {
    dispatch(addNewPost(data));
    setOpen(false);
  };
  return (
    <div>
      <div className="post_add">
        <Button
          type="ghost"
          icon={<i className="fas fa-plus" />}
          size="large"
          onClick={() => setOpen(!open)}
        >
          New post
        </Button>
      </div>
      <div>
        <Spin spinning={loading} delay={500} tip="Loading..." size="large">
          <div className="list-post">
            {posts?.map((post, idx) => (
              <PostItem key={idx} post={post} />
            ))}
          </div>
        </Spin>
      </div>
      <AddModal
        isModalVisible={open}
        handleOnCancel={handleCancel}
        handleOnOk={handleOk}
      />
    </div>
  );
=======
import React, { useState } from 'react';
import {Button} from "antd";
import AddModal from '../AddModal/AddModal';

export default function Posts() {
    const [open, setOpen] = useState(false);
    const handleCancel = () => {
        setOpen(false);
      };

    const handleOk = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="post_add">
                <Button type="ghost" icon={<i className="fas fa-plus"/>} size="large" onClick={() => setOpen(!open)} > New post</Button>
            </div>
            <AddModal isModalVisible={open} handleOnCancel={handleCancel} handleOnOk={handleOk}/>
        </div>
    )
>>>>>>> fb1b2b5079e0f1ea424d075f133e378c6f86cce7
}

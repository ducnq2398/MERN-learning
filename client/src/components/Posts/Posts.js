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
}

import React from 'react'
import { Modal, Input, Form } from 'antd';
import { useForm } from 'react-hook-form';

export default function AddModal({ isModalVisible, handleOnCancel, handleOnOk }) {
    const { TextArea } = Input;
    const { register, handleSubmit, formState: { errors }, watch} = useForm({defaultValues});

    const watchAll = watch();
    
    console.log(watchAll);
    return (
        <Modal title="Add new post" visible={isModalVisible} onOk={handleSubmit(handleOnOk)} onCancel={handleOnCancel} okText="Create">
            <Form>
                <Input name="title" placeholder="Title" {...register("title", { required: "Title is required!!! Please enter your title.", minLength: { value: 4, message: "Title has min 4 characters." } })} />
                {errors.title && (
                    <p style={{ color: "red" }}>{errors.title.message}</p>
                )}
                <Input name="url" placeholder="URL" style={{ marginTop: 10 }} {...register("url")} />
                <TextArea rows={4} name="description" placeholder="Description" style={{ marginTop: 10 }} {...register("description")} />
            </Form>
        </Modal>
    )
}

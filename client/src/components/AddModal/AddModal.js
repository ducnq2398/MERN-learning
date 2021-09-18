import React from "react";
import { Modal, Input, Form } from "antd";
import { useForm, Controller } from "react-hook-form";

export default function AddModal({
  isModalVisible,
  handleOnCancel,
  handleOnOk,
}) {
  const { TextArea } = Input;
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  return (
    <Modal
      title="Add new post"
      visible={isModalVisible}
      onOk={handleSubmit(handleOnOk)}
      onCancel={handleOnCancel}
      okText="Create"
    >
      <Form>
        <Controller
          name="title"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              value={field.value}
              placeholder="Title"
            />
          )}
          rules={{
            required: "Title is required!!! Please enter your title.",
            minLength: { value: 4, message: "Title has min 4 characters." },
          }}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}

        <Controller
          name="url"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              onChange={field.onChange}
              style={{ marginTop: 10 }}
              value={field.value}
              placeholder="URL"
            />
          )}
          rules={{
            required: "Link is required!!! Please enter your link.",
          }}
        />

        <Controller
          name="description"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <TextArea
              rows={4}
              style={{ marginTop: 10 }}
              onChange={field.onChange}
              value={field.value}
              placeholder="Description"
            />
          )}
        />
      </Form>
    </Modal>
  );
}

import CakeContainer from "./container/CakeContainer"
// import React, { useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select
} from 'antd';

function App() {
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };


  // handle save data in firebase database
  const handleFormSubmit = (values) =>{
    console.log(values);
  };
  
  return (
    <div>
      <CakeContainer />

      {/* form to save data in firebase database */}
        <Form
    {...formItemLayout}
      form={form}
      onFinish={handleFormSubmit}
      style={{ maxWidth: 600 }}
  >
    <Form.Item 
        label="Animal Name: " 
        name="animalName" r
        ules={[{ required: true, message: 'Please input!' }]}>
      <Input />
    </Form.Item>

    <Form.Item
      label="Available Amount: "
      name="availableNumber"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>

    <Form.Item
      label="Animal Description"
      name="animalDescription"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Record Date: "
      name="recordDate"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
        </Form>
    </div>
  )
}

export default App

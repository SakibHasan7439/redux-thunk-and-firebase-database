import CakeContainer from "./container/CakeContainer"
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { fetch_animal_data, start_add_animal_data } from "./redux/action/action";
import { useEffect, useState } from "react";
import Display from "./display/display";


function App() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { animals, loading, error } = useSelector(state => ({
    animals: state.animals,
    loading: state.loading,
    error: state.error
  }));

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


  useEffect(()=>{
    const unsubscribeThunk = dispatch(fetch_animal_data());

    return () =>{
      if(unsubscribeThunk){
        unsubscribeThunk.then(unsubscribe =>{
          if(unsubscribe) unsubscribe();
        })
      }
    }

  }, [dispatch]);

  console.log('animals :>> ', animals);

  // handle save data in firebase database
  const handleFormSubmit = async(values) =>{ 
    if(isSubmitting) return;

    setIsSubmitting(true)
    try {
      
      const format_data = {
      ...values,
      recordDate: values.recordDate.format("YYYY-MM-DD")
      };

      dispatch(start_add_animal_data(format_data));
      form.resetFields();

    } catch (error) {
      console.log("error found: ", error.message);
    }
    

    
  };
  
  return (
    <>
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
        name="animalName" 
        rules={[{ required: true, message: 'Please input!' }]}>
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

    <Display 
      animals={animals}
      loading={loading}
    />
    </>
  )
}

export default App

import React from 'react'
import { Select } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const { Option } = Select;

const SelectGroup = () => {
    
    const onFinish = (values) => {
        console.log(values);
    };

  return(
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
    <Select
      showSearch
      style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '50px',
          width: 200 }}
      placeholder="Search to Select"
      optionFilterProp="children"
      filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
  >
    <Option value="1">Group 1</Option>
    <Option value="2">Group 2</Option>
    <Option value="3">Group 3</Option>
    <Option value="4">Group 4</Option>
    <Option value="5">Group 5</Option>
    <Option value="6">Group 6</Option>

  </Select>
  
   
    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Enter
        </Button>
      </Form.Item>
     </Form>
   );
};

export default SelectGroup
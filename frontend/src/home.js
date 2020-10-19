import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export default class Register extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        Name: '',
        Address: '',
      }
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeAddress = this.handleChangeAddress.bind(this);
      this.RegisterNoder = this.RegisterNoder.bind(this);
    }
    handleChangeName(event) {
      this.setState({Name: event.target.value});
    }
    handleChangeAddress(event) {
      this.setState({Address: event.target.value});
    }

    async RegisterNoder(){
      var axios = require('axios');
      var data = JSON.stringify({"nodes":[this.state.Address]});

      var config = {
        method: 'post',
        url: 'http://localhost:8000/nodes/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data.message))
        this.setState({
          Name: '',
          Address: "",
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  render(){
    return(
      <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        
        <Form.Item label="Name">
          <Input placeholder="Name" value={this.state.Name} onChange={this.handleChangeName}/>
        </Form.Item>
        <Form.Item label="Network Address" value={this.state.Address} onChange={this.handleChangeAddress} >
          <Input placeholder="127.0.0.1:8001" />
        </Form.Item>
        <Form.Item >
          <Button type="primary" onClick={this.RegisterNoder}>Submit</Button>
        </Form.Item>
      </Form>
    </div>
    )
  }
} 

  
      
    

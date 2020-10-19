import React, { useState, Component } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Table
  } from 'antd';
import axios from 'axios';

  const FormSizeDemo = () => {
    const [componentSize, setComponentSize] = useState('small');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
  }

class Gys extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          HostName: '',
          NewNode: 'http://127.0.0.1:8000',
          TransactionId: 0,
          Pname: '',
          Wname: '',
          DrugType: '',
          DrugName: '',
          Quantity: '',
          dataSource: [{}],
          url: 'http://localhost:8000/',
          
        }
        this.handleChangeTransactionId = this.handleChangeTransactionId.bind(this);
        this.handleChangePname = this.handleChangePname.bind(this);
        this.handleChangeWname = this.handleChangeWname.bind(this);
        this.handleChangeDrugType = this.handleChangeDrugType.bind(this);
        this.handleChangeDrugName = this.handleChangeDrugName.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeNewNode = this.handleChangeNewNode.bind(this);
        this.handleChangeHostName = this.handleChangeHostName.bind(this);
        
        this.Postdata = this.Postdata.bind(this);
        this.MineData = this.MineData.bind(this);
        this.RegisterNode = this.RegisterNode.bind(this);
    }
    
    
     async Postdata (){
      var axios = require('axios');
      

      var data = JSON.stringify({"TransactionId":this.state.TransactionId,"Pname":this.state.Pname,"Wname":this.state.Wname,"DrugType":this.state.DrugType,"DrugName":this.state.DrugName,"Quantity":this.state.Quantity});
      
      var config = {
        method: 'post',
        url: this.state.NewNode+'/transactions/new',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data.message));
        
      })
      .catch(function (error) {
        console.log(error);
      });
      
    }
    async MineData(){
      var axios = require('axios');

      var config = {
        method: 'get',
        url: this.state.NewNode+'/mine',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(JSON.stringify(response.data.message))
        this.setState({
          dataSource: JSON.stringify(response.data.transactions)
        })
      })
      .catch(function (error) {
        console.log(error);
      });
      

    }
    async RegisterNode (){
      var axios = require('axios');
      var data = JSON.stringify({"nodes":[this.state.NewNode]});

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
          alert(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    handleChangeHostName(event) {
      this.setState({HostName: event.target.value});
    } 
    handleChangeNewNode(event) {
      this.setState({NewNode: event.target.value});
    }
    handleChangePort(event) {
      this.setState({port: event.target.value});
    }
    handleChangeTransactionId(event) {
      this.setState({TransactionId: event.target.value});
    }
    handleChangePname(event) {
      this.setState({Pname: event.target.value});
    }
    handleChangeWname(event) {
      this.setState({Wname: event.target.value});
    }
    handleChangeDrugType(event) {
      this.setState({DrugType: event.target.value});
    }
    handleChangeDrugName(event) {
      this.setState({DrugName: event.target.value});
    }
    handleChangeQuantity(event) {
      this.setState({Quantity: event.target.value});
    }

   render(){
    const dataSource = this.state.dataSource
    
    const columns = [{
      title: 'Wname',
      dataIndex: 'Wname',
      key: 'Wname',
    }, {
      title: 'DrugType',
      dataIndex: 'DrugType',
      key: 'DrugType',
    }, {
      title: 'DrugName',
      dataIndex: 'DrugName',
      key: 'DrugName',
    },{
      title: 'Quantity',
      dataIndex: 'Quantity',
      key: 'Quantity',
    }];
       return (
        <div>
            <div>
                <Form
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 14 }}
                  layout="horizontal"
                >
                  <Form.Item label="Name">
                    <Input placeholder="Name" value={this.state.HostName} onChange={this.handleChangeHostName}/>
                  </Form.Item>
                  <Form.Item label="Network Address"  >
                    <Input placeholder="127.0.0.1:8001" value={this.state.NewNode} onChange={this.handleChangeNewNode} />
                  </Form.Item>
                  <Form.Item >
                    <Button type="primary" onClick={this.RegisterNode}>Register Node</Button>
                  </Form.Item>
                </Form>
            </div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
         
        
        >
          <Form.Item label="TransactionID">
            <Input value={this.state.TransactionId} onChange={this.handleChangeTransactionId}/>
          
          </Form.Item>
          <Form.Item label="Pharmacy Name">
            <Input value={this.state.Pname} onChange={this.handleChangePname}/>
          
          </Form.Item>
          <Form.Item label="WareHouse Name">
          <Input value={this.state.Wname} onChange={this.handleChangeWname} />
            
          </Form.Item>
          <Form.Item value ={this.state.DrugType} label="DrugType" onChange={this.handleChangeDrugType}>
            <Select>
              <Select.Option value="hr">Home Remedies</Select.Option>
              <Select.Option value="pd">Pharmacy Drugs</Select.Option>
              <Select.Option value="pp">Pescription Preparations</Select.Option>
              <Select.Option value="pi">Pharamcist Initiated</Select.Option>
              <Select.Option value="pp1">PP10</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Drug Name">
          <Input value={this.state.DrugName} onChange={this.handleChangeDrugName} />
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Input Quantity">
          <Input value={this.state.Quantity} onChange={this.handleChangeQuantity} />
          </Form.Item>
          <Form.Item label="Button">
            <Button onClick = {this.Postdata}>Submit Transactions</Button>
          </Form.Item>
          <Form.Item label="Button">
            <Button onClick = {this.MineData}>Mine Transactions</Button>
          </Form.Item>
        </Form>
        <Table dataSource={this.state.dataSource} columns={columns} />
        </div>
       )
   }
    
}

export default Gys;
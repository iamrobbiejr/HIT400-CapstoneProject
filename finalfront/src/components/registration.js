import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Form>
                    <Form.Item label="Name">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Access Port">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
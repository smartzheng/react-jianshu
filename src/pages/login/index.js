import React, {PureComponent} from 'react';
import { Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {LoginWrapper} from "./style";
import {actionCreators} from "./store";
import {Form, Icon, Input, Button} from 'antd';
import 'antd/dist/antd.css';

class LoginForm extends PureComponent {
    render() {
        if (this.props.status) {
            return <Redirect to={'/'}/>
        }
        const {getFieldDecorator} = this.props.form;
        const {handleSubmit} = this.props;
        return (
            <LoginWrapper>
                <Form
                    onSubmit={(e) => {
                        handleSubmit(e, this.props.form)
                    }}
                    className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入用户名！'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="请输入用户名"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="请输入密码"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                                className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </LoginWrapper>
        );
    };


}

const mapState = (state) => {
    return {
        status: state.getIn(['login', 'status'])
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleSubmit: (e, form) => {
            e.preventDefault();
            form.validateFields((err, values) => {
                if (!err) {
                    dispatch(actionCreators.login(values.username, values.password))
                }
            });
        },
        logout: (username) => {
            dispatch(actionCreators.logout(username))
        }
    }
};

const Login = Form.create({name: 'login'})(LoginForm);
export default connect(mapState, mapDispatch)(Login);
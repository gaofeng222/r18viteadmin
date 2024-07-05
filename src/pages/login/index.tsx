import { Button, Checkbox, Form, Input } from 'antd';
import style from './login.module.scss'
import type { FormProps } from 'antd';
import Logo from '@/assets/images/login-bg.png'

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


function Login(){
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={style['login-page']}>
       {/* antd的表单 */}
      <div className={style['login-page__main']}>
        <div className={style['left-content']}>
           <img src={Logo} />
        </div>
        <div className={style['right-content']}>
          <p className={style['login-form-title']}>
             欢迎使用<span>Viteam</span>管理平台
          </p>
          <h2>登录</h2>
            <Form
                  labelCol={{ span: 3 }}
                  wrapperCol={{ span: 18 }}
                  style={{ maxWidth: 800,minWidth:600}}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
            >
                <Form.Item 
                  label="用户名"
                  name="username"
                  
                  rules={[{ required: true, message: '请输入用户名!' }]}>
                    <Input placeholder="请输入用户名" style={{height:'46px'}} />
                </Form.Item>
                <Form.Item 
                  label="密码"
                  name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}>
                  <Input placeholder="请输入密码" type='password' style={{height:'46px'}} />
                </Form.Item>
                <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 2, span: 16 }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item  wrapperCol={{ offset: 2, span: 19 }}>
                    <Button style={{width:"100%",height:'46px',fontSize:"20px"}} type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
            </div>
        </div>
    </div>
  )
}

export default Login;
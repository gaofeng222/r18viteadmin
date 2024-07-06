import '@/App.css'
import { AlertOutlined, BankOutlined, DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, MenuProps, Space, message } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate,useMatches  } from 'react-router-dom';
import './index.scss'
import { logOutFormDispatch } from '@/store/reducers/loginReucer';

const items: MenuProps['items'] = [
  {
    key: '2',
    danger: true,
    label: '退出登录',
  },
]

const DefaultLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {userInfo} = useSelector((state: any) => state.loginReducer);
  const [stateOpenKeys, setStateOpenKeys] = useState(['']);
  const routes = useMatches()
  
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname= location.pathname;
  const navigate = useNavigate();
  const handleClickMenu = (e: any) => {
    console.log("🚀 ~ handleClickMenu ~ e:", e)
    //路由跳转
    navigate(e.key);
  }

  useEffect(() => {
  }, [])

  const  handleLogOut:MenuProps['onClick'] = async () => {
    //@ts-ignore
    const res = await dispatch(logOutFormDispatch())
    if(res){
      message.success('退出成功')
      navigate('/login')
    }else{
      message.error('退出失败')
    }
  }

  const onOpenChange = (openKeys:any) => {
    console.log("🚀 ~ onOpenChange ~ openKeys:", openKeys)
    const currentOpenKey = openKeys.find((key:string) => stateOpenKeys.indexOf(key) === -1);
    setStateOpenKeys([currentOpenKey])
  }

  return (
    <Layout className='main-layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleClickMenu}
          selectedKeys={[pathname]}
          openKeys={stateOpenKeys}
          defaultSelectedKeys={[pathname]}
          onOpenChange={onOpenChange}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: '首页',
            },
            {
              key: '/hooks',
              icon: <BankOutlined />,
              label: 'hooks知识',
              children: [
                {
                  key: '/hooks/useState',
                  label: 'useState',
                },
                {
                  key: '/hooks/useEffect',
                  label: 'useEffect',
                },
                {
                    key: '/hooks/useMemo',
                    label: 'useMemo',                  
                }
              ]
            },
            {
              key: '/store',
              icon: <AlertOutlined />,
              label: '数据中心',              
              children: [
                {
                  key: '/redux/redux-thunk',
                  label: 'redux-thunk',
                },
                {
                  key: '/redux/redux-saga',
                  label: 'redux-saga',
                },
                {
                  key: '/redux/toolkit',
                  label: 'reactJsToolkit',
                },
                {
                  key: '/redux/zustand',
                  label: 'zustand', 
                }
              ]
            },
            {
              key: '/about',
              icon: <VideoCameraOutlined />,
              label: '关于我们',
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background top-header" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='right-content'>
             <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
            <span className='right-content__welcome-tips'>
                欢迎回来,
            </span>
             <Dropdown menu={{ items,onClick:handleLogOut }}>
                <Space>
                  <span>
                            {userInfo.username}  
                        </span>
                    <DownOutlined />
                  </Space>
              </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;

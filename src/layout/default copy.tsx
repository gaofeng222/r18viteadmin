import '@/App.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const DefaultLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const pathname= location.pathname;
  const navigate = useNavigate();
  const handleClickMenu = (e: any) => {
    //路由跳转
    navigate(e.key);
  }

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <Layout className='main-layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleClickMenu}
          selectedKeys={[pathname]}
          defaultSelectedKeys={[pathname]}
          items={[
            {
              key: '/home',
              icon: <UserOutlined />,
              label: '首页',
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
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
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

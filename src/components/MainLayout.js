import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">DC</span>
            <span className="lg-logo">Admin Dashboard</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "list-brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "list-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "list-color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Mubashir</h5>
                <p className="mb-0">mubashirmehmood558@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;

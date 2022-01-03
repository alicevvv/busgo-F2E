import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import {
  Row,
  Col,
  Select,
  Input,
  Button,
  Typography,
  Checkbox,
  Form,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { setLogin,setLoginState } from "../action/index";
import { StoreContext } from "../store";
import { useState, useEffect, useContext } from "react";

export default function Login() {
  const history = useNavigate();
  const {
    state: { loginInfo,loginState },
    dispatch,
  } = useContext(StoreContext);

  // const{
  //   state:{
  //     userSign:{email,}
  //   }
  // }
  const onFinish = (values) => {
    setLogin(dispatch, values);
    setLoginState(dispatch,true);
    history("/signin");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col xs={0} md={0} lg={12}>
          <div
            style={{
              width: "100%",
              height: "calc(100vh - 64px)",
              objectFit: "cover",
            }}
          >
            <img
              src="./img/login_bg.svg"
              style={{
                width: "100%",
                height: "calc(100vh - 64px)",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
        <Col xs={3} md={3} lg={3} className="bg-light"></Col>
        <Col xs={18} md={18} lg={6} className="bg-light">
          <div
            className="flex-column align-items-center"
            style={{ marginTop: "100px" }}
          >
            <img
              src="./img/busgo_logo.svg"
              style={{ width: "112px", marginBottom: "1em" }}
            />
            {/* loginInputs */}
            <span className=" mt-3" style={{ width: "100%" }}>
              <Form
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ width: "100%" }}
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "請輸入帳號" }]}
                >
                  <Input
                    className="login-input"
                    placeholder="帳號 / username"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "請輸入密碼" }]}
                >
                  <Input.Password
                    className="login-input"
                    placeholder="密碼 / password"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
                <div
                  className="mt-3"
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Checkbox>記住我 Remember me </Checkbox>
                  <Button type="text" style={{ fontWeight: "bold" }}>
                    忘記密碼?
                  </Button>
                </div>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-primary hover-border"
                    style={{ width: "100%", height: "60px", marginTop: "1rem" }}
                  >
                    <span className="text-white">登入會員</span>
                  </Button>
                </Form.Item>
                {/* <Link to="/signin" style={{ width: "100%" }}>
                  <Button
                    className="btn-primary hover-border"
                    style={{ width: "100%", height: "60px", marginTop: "1rem" }}
                  >
                    <span className="text-white">登入會員</span>
                  </Button>
                </Link> */}
              </Form>
            </span>
            <span className="mt-3">
              or
              <Link
                to={`/member`}
                className="hover-underline"
                style={{ marginLeft: "0.5rem" }}
              >
                加入會員
              </Link>
            </span>
          </div>
        </Col>
        <Col xs={3} md={3} lg={3} className="bg-light"></Col>
      </Row>
      <MyFooter />
    </div>
  );
}

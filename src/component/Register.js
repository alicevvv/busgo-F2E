import {
  Row,
  Col,
  Select,
  Input,
  Button,
  Typography,
  Form,
  InputNumber,
} from "antd";
import { Link } from "react-router-dom";
// import { getUsersData } from "../action/index";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const onSearch = (value) => console.log(value);

export default function Register() {
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  //   getUsersData(values);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const formLayout = {
    labelCol: { xs: { span: 4 } },
    wrapperCol: { xs: { span: 20 } },
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
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
          style={{ marginTop: "60px" }}
        >
          {/* <img
              src="./img/busgo_logo.svg"
              style={{ width: "112px", marginBottom: "1em" }}
            /> */}
          <div className="register-title ">會員申請</div>
          <span className="registerInputs" style={{ width: "100%" }}>
            <Form
              {...formLayout}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ width: "100%" }}
            >
              <Form.Item
                label="E-mail"
                name="userEmail"
                rules={[
                  {
                    type: "email",
                    message: "格式不正確",
                  },
                  {
                    required: true,
                    message: "請輸入電子信箱",
                  },
                ]}
              >
                <Input className="register-input" placeholder="輸入電子信箱" />
              </Form.Item>
              <Form.Item
                label="密碼"
                name="password"
                className="mt-5"
                rules={[{ required: true, message: "請輸入密碼" }]}
              >
                <Input.Password className="register-input" />
              </Form.Item>
              <Form.Item
                label="姓名"
                name="userName"
                className="mt-5"
                rules={[{ required: true, message: "請輸入姓名" }]}
              >
                <Input className="register-input" />
              </Form.Item>
              <Form.Item
                name={"age"}
                label="年齡"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber className="register-input" />
              </Form.Item>
              <Form.Item>
                <Link to={`/login`} style={{ width: "100%" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-primary hover-border btn-register"
                    style={{ height: "60px", marginTop: " 1rem" }}
                  >
                    <span className="text-white">申請</span>
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </span>
          {/* <Link to={`/login`} style={{ width: "100%" }}></Link> */}
          <span className="mt-3" style={{ marginBottom: "2rem" }}>
            or
            <Link
              to={`/login`}
              className="hover-underline"
              style={{ marginLeft: "0.5rem" }}
            >
              登入
            </Link>
          </span>
        </div>
      </Col>
      <Col xs={3} md={3} lg={3} className="bg-light"></Col>
    </Row>
  );
}

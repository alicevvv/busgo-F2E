import { Row, Col, Select, Input, Button, Typography, Form } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const onSearch = (value) => console.log(value);

export default function Register() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
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
            style={{ marginTop: "100px" }}
          >
            <img
              src="./img/busgo_logo.svg"
              style={{ width: "112px", marginBottom: "1em" }}
            />
            <div className="register-title ">會員申請</div>
            <span className="registerInputs" style={{width:'100%'}}>
                    <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{width:'100%'}}
                    >
                            <Form.Item
                        label="email"
                        name="userEmail"
                        rules={[{ required: true, message: '請輸入電子信箱' }]}
                        style={{height:'58px'}}
                    >
                        <Input className="register-input" placeholder="輸入電子信箱"/>
                    </Form.Item>
                    <Form.Item
                label="密碼"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password  className="register-input"/>
            </Form.Item>
                    </Form>
            </span>
            <Link to={`/`} style={{ width: "100%" }}>
              <Button
                className="btn-primary hover-border"
                style={{ width: "100%", height: "60px", marginTop: "1rem" }}
              >
                <span className="text-white">申請</span>
              </Button>
            </Link>
            <span className="mt-3">or<Link to={`/login`} className="hover-underline" style={{marginLeft:'0.5rem'}}>登入</Link></span>
          </div>
        </Col>
        <Col xs={3} md={3} lg={3} className="bg-light"></Col>
      </Row>
  );
}

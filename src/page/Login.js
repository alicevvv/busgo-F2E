import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Button, Typography, Checkbox } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import newsdata from "../json/Newsdata.json";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const onSearch = (value) => console.log(value);

export default function Login() {
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
            <span className="loginInputs">
              <Input placeholder="帳號 / username" style={{ width: "100%" }} />
              <Input placeholder="密碼 / password" style={{ width: "100%" }} />
            </span>
            <div
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
            <Link to={`/`} style={{ width: "100%" }}>
              <Button
                className="btn-primary hover-border"
                style={{ width: "100%", height: "60px", marginTop: "1rem" }}
              >
                <span className="text-white">登入會員</span>
              </Button>
            </Link>
            <span className="mt-3">or<Link to={`/member`} className="hover-underline" style={{marginLeft:'0.5rem'}}>加入會員</Link></span>
          </div>
        </Col>
        <Col xs={3} md={3} lg={3} className="bg-light"></Col>
      </Row>
      <MyFooter />
    </div>
  );
}

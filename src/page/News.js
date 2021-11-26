import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select } from "antd";

const { Option } = Select;

export default function News() {
  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col md={24} xl={12}></Col>
        <Col xs={0} sm={0} md={0} xl={12} className="bg-light"></Col>
      </Row>
      <MyFooter />
    </div>
  );
}

import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row } from "antd";

export default function Path() {
  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh"></Row>
      <MyFooter />
    </div>
  );
}

import { Button, Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";


const { Text } = Typography;

export default function MyFooter() {
  return (
    <Row align="middle" justify="center" className="footer w100">
      <Col
        xs={{ span: 18, offset: 0 }}
        md={{ span: 18, offset: 0 }}
        lg={{ span: 11, offset: 1 }}
        className="pl-3"
      >
        <Link to="/member" className="btn-footer">加入會員</Link>
        <Button className="btn-footer">常見問題</Button>
        <Button className="btn-footer">關於我們</Button>
        <Button className="btn-footer">意見回饋</Button>
      </Col>
      <Col
        xs={{ span: 24, offset: 0 }}
        md={{ span: 24, offset: 0 }}
        lg={{ span: 6, offset: 6 }}
        justify="end"
      >
        <div className="flex-column p-3">
          <Text className="text-white">CONTACT US</Text>
          <div href="" target="_blank" className="text-white op-075">
            taiwan_busgo@mail.bus.tw
          </div>
        </div>
      </Col>
    </Row>
  );
}

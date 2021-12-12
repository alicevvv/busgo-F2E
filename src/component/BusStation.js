import { Space, Row, Col, Radio } from "antd";
import busdata from "../json/BusData.json";

const findDegree = (degree) => {
  if (degree === "normal") {
    return <div className="busdegree degree-yellow">FAD-061</div>;
  } else if (degree === "high") {
    return <div className="busdegree degree-orange">FAD-053</div>;
  }
};

export default function BusStation({ number }) {
  return (
    <div className="flex-column" style={{ width: "100%" }}>
      {busdata[0].busData.map((busdata) => {
        return busdata.title === "進站中" ? (
          <Row>
            <Col span={1}></Col>
            <Col span={6}>
              <div className="bustimeBadge bg-yellow text-primary">
                {busdata.title}
              </div>
            </Col>
            <Col span={6}>
              <div className="busstation">{busdata.station}</div>
            </Col>
            <Col span={2}></Col>
            <Col span={2}>
              <Radio className="busradio"></Radio>
            </Col>
            <Col span={1}></Col>
            <Col span={5}>{findDegree(busdata.degree)}</Col>
            <Col span={1}></Col>
          </Row>
        ) : (
          <Row>
            <Col span={1}></Col>
            <Col span={6}>
              <div className="bustimeBadge bg-primary">{busdata.title}</div>
            </Col>
            <Col span={6}>
              <div className="busstation">{busdata.station}</div>
            </Col>
            <Col span={2}></Col>
            <Col span={2}>
              <Radio className="busradio"></Radio>
            </Col>
            <Col span={1}></Col>
            <Col span={5}></Col>
            <Col span={1}></Col>
          </Row>
        );
      })}
    </div>
  );
}

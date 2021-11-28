import React from "react";
import { Row, Col } from "antd";
import { Link, NavLink } from "react-router-dom";

export default function MyNav() {
  return (
    <Row className="nav">
      <Col md={24} xl={12} className="d-flex">
        <div
          className="d-flex align-items-center"
          style={{ marginLeft: "60px" }}
        >
          <Link to="/">
            <img src="./img/logo.svg" alt="公車動態應用系統"></img>
          </Link>
        </div>
      </Col>
      <Col
        xs={0}
        sm={0}
        md={0}
        xl={11}
        className="d-flex justify-content-end bg-light"
      >
        <div className="d-flex align-items-center">
          <div className="menuBar">
            <NavLink to="/news" className="p-3">
              最新消息
            </NavLink>
            <NavLink to="/" className="p-3">
              附近站牌
            </NavLink>
            <NavLink to="/" className="p-3">
              路線規劃
            </NavLink>
            <NavLink to="/" className="p-3">
              乘客服務
            </NavLink>
            <NavLink to="/login" className="p-3 btn-primary btn-login">
              會員登入
            </NavLink>
          </div>
        </div>
      </Col>
      <Col xs={0} sm={0} xl={1} className="bg-light"></Col>
    </Row>
  );
}

import { Collapse } from "antd";
import { Row, Col, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import React, { useState,useContext } from "react";
import { StoreContext } from "../store";


export default function MyNav() {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
  const {
    state: { loginInfo,loginState },
    dispatch,
  } = useContext(StoreContext);
  return (
    <div className="">
      <Row className="nav">
        <Col xs={23} md={23} xl={12} className="d-flex">
          <div
            className="d-flex align-items-center"
            style={{
              width: "100%",
              marginLeft: "60px",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img src="./img/logo.svg" alt="公車動態應用系統"></img>
            </Link>
            <Button
              onClick={handleToggle}
              className="btn-navbar"
              style={{ border: "none" }}
            >
              {<MenuOutlined />}
            </Button>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} xl={11} className="bg-light">
          <div
            className="d-flex justify-content-end"
            style={{ height: "100%" }}
          >
            <div className="d-flex align-items-center">
              <div className="menuBar">
                <NavLink to="/" className="p-3">
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
                  {loginState === true?
                  <span className="text-yellow text-size-14">{loginInfo.email}</span>:
                  <span className="text-white text-size-14">會員登入</span>
                  }                  
                </NavLink>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={0} sm={0} xl={1} className="bg-light"></Col>
      </Row>
      <Row>
        <Col xs={24} ms={24} xl={0} style={{ zIndex: "0" }}>
          <div className={`w100 mb-4 xs_navbar ${isActive ? "d-none" : ""}`}>
            <Link to="./login" className="xs_nav bg-primary text-white">
              <div className="bg-primary py-3">會員登入/會員註冊</div>
            </Link>
            <Link to="./news" className="xs_nav">
              <div className="py-3">NEWS / 最新公告</div>
            </Link>
            <Link to="./path" className="xs_nav">
              <div className="py-3">NEARBY / 附近站牌</div>
            </Link>
            <Link to="./path" className="xs_nav">
              <div className="py-3">PLANNER / 路線規劃</div>
            </Link>
            <Link to="./" className="xs_nav">
              <div className="py-3">SERVICE / 乘客服務</div>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

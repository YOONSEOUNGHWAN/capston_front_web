import React from "react";
import { Progress, Pagination, PageHeader } from "antd";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function Circle() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  let navigate = useNavigate();

  return (
    <div>
      <Slider style={{ width: "900px" }} {...settings}>
        <sapn style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={75} />
        </sapn>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={70} status="exception" />
        </span>

        <span style={{ marginRight: "30px" }} onClick={() => navigate('/subPage')}>
          <Progress type="circle" percent={100} format={() => `00마을`} />
        </span>

        <sapn style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={75} />
        </sapn>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={70} status="exception" />
        </span>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} />
        </span>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} />
        </span>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} />
        </span>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} />
        </span>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} />
        </span>
        <span style={{ marginRight: "30px" }}>
          <Progress type="circle" percent={100} />
        </span>
      </Slider>
    </div>
  );
}

import React, { useState } from "react";
import { Progress} from "antd";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export default function Circle({ username, role }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [townList, setTownList] = useState([]);
  let result = useQuery("townlist", () => {
    axios
      .get("/api/town")
      .then((res) => {
        setTownList(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  return (
    <div>
      <Slider style={{ width: "900px" }} {...settings}>
        {townList.map((item, i) => (
          <Town
            key={i}
            townId={item.id}
            username={username}
            role={role}
            people_num={item.people_num}
            town_name={item.town_name}
          />
        ))}
      </Slider>
    </div>
  );
}

function Town({ townId, username, role, people_num, town_name }) {
  let navigate = useNavigate();

  return (
    <span
      style={{ marginRight: "30px" }}
      onClick={() =>
        navigate("/subPage", {
          state: {
            name: username,
            uid: townId,
            role: role,
            town_name: town_name,
          },
        })
      }
    >
      <Progress
        type="circle"
        percent={people_num}
        format={() => `${town_name}`}
      />
    </span>
  );
}

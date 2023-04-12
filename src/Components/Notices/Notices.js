import React, { useEffect, useState } from "react";
import "./notices.css";
import Notice from "./Notice";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Notices = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [ps, setPs] = useState(0);
  var notices = [
    {
      id: 0,
      date: "12/04",
      title: "Website Launch",
      desc: "We are exited to announce the launch of the official website of the Inter Bhawan Tech Meet: TechShila",
      type: "announcement",
    },
    {
      id: 1,
      date: "10/04",
      title: "Analytics and consulting Problem Statement Released",
      desc: "The sixth problem statement for TechShila: Inter Bhawan Tech Meet, in the domain of consultancy and business analytics is out now. This problem statement has been provided by Sutra Management Consultancies. Participating in this PS will give you an idea of how analytics is used for business development.",
      type: "ps",
    },
    {
      id: 2,
      date: "09/04",
      title: "Design Problem Statement Released",
      desc: "The fifth problem statement for TechShila: Inter Bhawan Tech Meet, in the domain of Brand Design is out now. This problem statement has been provided by Farmicon. Farmicon is a startup which has been working in providing farmers with advanced farming tools that increase efficiency, productivity, and profitability. This problem statement will help you to explore the field of design systems and how branding is done for companies.",
      type: "ps",
    },
    {
      id: 3,
      date: "07/04",
      title: "Software Development Problem Statement Released",
      desc: "The fourth problem statement for TechShila: Inter Bhawan Tech Meet, in the domain of software development is out now. This problem statement has been provided by Tournafest, an alum startup which aims to reinvent the gaming experience by providing ace gaming platforms where gamers can play, compete and grow together.",
      type: "ps",
    },
    {
      id: 4,
      date: "04/04",
      title: "NLP Problem Statement Released",
      desc: "The third problem statement for TechShila: Inter Bhawan Tech Meet on the domain Natural Language Processing is here. This problem statement is courtesy of AccioJobs - India’s leading platform for job seekers and employers. Get your AI-pipeline skills on and create a dubbed video that sounds natural and engaging in Telugu. This is your chance to learn from the best in the field of Natural Language Processing and compete with other talented teams",
      type: "ps",
    },
    {
      id: 5,
      date: "03/04",
      title: "Drone Robotics Problem Statement Released",
      desc: "The second problem statement for TechShila: Inter Bhawan Tech Meet on the domain Drone Robotics is out now. This problem statement is provided by BlackHawk, a startup which aims to revolutionize the drone industry by providing businesses with autonomous drone solutions that are financially convenient.",
      type: "ps",
    },
    {
      id: 6,
      date: "02/04",
      title: "Computer Vision Problem Statement Released",
      desc: "Ready, set, solve!“ The first problem statement for TechShila: Inter Bhawan Tech Meet on the domain Computer Vision is out now. This problem statement is courtesy of Professor Sparsh Mittal - Faculty Member, Electronics & Communications Engineering and Joint faculty in Mehta Family School of DS and AI, IIT Roorkee.",
      type: "ps",
    },
    {
      id: 7,
      date: "01/04",
      title: "TechShila Launch",
      desc: "Attention all tech enthusiasts! Are you ready for the ultimate technological showdown? After tireless planning and preparation, the Students’ Technical Council is thrilled to announce the first edition of TechShila - IIT Roorkee's Inter Bhawan Tech Meet. This exciting event will showcase the best of IITR's extravagant technical culture as Bhawans will compete across various technical domains for securing the General Championship. TechShila 1.0 will be a two-week-long event starting today with a final showdown of participants from 14th to 16th April 2023.",
      type: "announcement",
    },
  ];

  useEffect(() => {
    setTitle(notices[0].title);
    setDesc(notices[0].desc);
    setType(notices[0].type);
  }, [notices]);

  useEffect(() => {
    setTitle(notices.find((notice) => notice.id === ps).title);
    setDesc(notices.find((notice) => notice.id === ps).desc);
    setType(notices.find((notice) => notice.id === ps).type);
  }, [ps, notices]);
  return (
    <div className="home-component-flex">
      <h1 className="title">Notices</h1>
      <div className="notices-flex">
        <div className="notice-titles">
          {notices.map((notice) => {
            return (
              <Notice
                key={notice.id}
                date={notice.date}
                title={notice.title}
                desc={notice.desc}
                val={notice.id}
                type={notice.type}
                func={setPs}
                isActive={notice.id === ps}
              />
            );
          })}
        </div>
        <div className="notices-desc">
          <div className="notice-desc-con">
            <div className="notice-desc-con-title">{title}</div>
            <p className="notice-desc-con-sub">{desc}</p>
          </div>
          {type === "ps" ? (
            <PrimaryButton
              text="View problem statement"
              url="/problem-statements"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;

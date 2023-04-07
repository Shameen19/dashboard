import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/1.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import Index from "./Pricing plan/index";
import { NavLink,Navigate, useNavigate } from "react-router-dom";
import "./Table/Table.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
  const navigation=useNavigate();

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (

    <>
    <div className="hidesidebar">
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Learn-X</span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          //console.log("----printing value of index");
          //console.log(index);
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => {setSelected(index)
              //if(item.heading==="Pricing Plan")
              //{
                
                  //navigation('/pricingPlan');
                
              //}
              //if(item.heading==="Dashboard")
              //{
                
                  //navigation('/home');
                
              //}
              //if(item.heading==="Analysis")
              //{
                
                  //navigation('/charts');
                
              //}
            //}
          }}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
      </div>
    </motion.div>
    </div>
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layouts = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  const handleSidebarShow =()=>{
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Navbar handleSidebarShow={handleSidebarShow} />
      <Wrapper>
        <Sidebar showSidebar={showSidebar} />
        <InnerWrapper>
          <Outlet />
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default Layouts;

const Wrapper = styled.div`
  display: flex;
`;

const InnerWrapper = styled.div`
  width: calc(100% - 283px);
  padding: 8rem 20px 0 40px;
  height: 100vh;
  overflow-y: scroll;
  @media screen and (max-width: 768px){
        width: 100%;
        padding: 7rem 10px;
    }
`

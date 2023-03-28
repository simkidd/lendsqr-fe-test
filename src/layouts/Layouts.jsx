import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layouts = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
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
  margin-top: 60px;
  margin-left: 60px;
`

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
  width: calc(100% - 283px);
  padding: 9rem 50px 0;
  height: 100vh;
  overflow-y: scroll;
`

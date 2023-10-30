import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'


const Layouts = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  const handleSidebarShow = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Navbar handleSidebarShow={handleSidebarShow} />
      <Wrapper>
        <Sidebar showSidebar={showSidebar} handleSidebarShow={handleSidebarShow} />
        <InnerWrapper>
          <div className="container">
            <Outlet />
          </div>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default Layouts

const Wrapper = styled.div`
  display: flex;
`;

const InnerWrapper = styled.div`
  width: calc(100% - 268px);
  padding-top: 44px;
  height: calc(100vh - 84px);
  margin-top: 84px;
  overflow-y: auto;
  position: relative;
  @media screen and (max-width: 768px){
      height: calc(100vh - 72px);
        margin-top: 72px;
        width: 100%;
        padding: 20px 10px;
    }

    .container{
        max-width: 1000px;
        margin: auto;
        position: relative;
    }
`
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function MyAccount() {
  return (
    <ProSidebarProvider>
      <Container className="border border-primary" fluid={true}>
        <Row>
          <Col sm="2">
            <Sidebar>
              <Menu>
                <SubMenu label="Charts">
                  <MenuItem> Pie charts </MenuItem>
                  <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
                <MenuItem> Calendar </MenuItem>

                <SubMenu label="Charts">
                  <MenuItem> Pie charts </MenuItem>
                  <MenuItem> Line charts </MenuItem>
                </SubMenu>
              </Menu>
            </Sidebar>
          </Col>
          <Col md="auto">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </ProSidebarProvider>
  );
}

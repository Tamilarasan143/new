import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faBars, faUsers, faList, faMoneyBill, faHotel, faIndianRupeeSign, faCartShopping, faBug, faDollarSign, faCheckToSlot, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';


export default function MyAccount() {
  const { collapseSidebar } = useProSidebar();
  return (
    <>
      <Container className="fluid" style={{ display: 'flex', height: '100%', position: 'absolute' }}>
        <Sidebar>
          <Menu>
            <Button className="justify-content-end" variant="light" onClick={() => collapseSidebar()}><FontAwesomeIcon icon={faBars} /></Button>
            <SubMenu className="layout-sidebar" icon={<FontAwesomeIcon icon={faUsers} />} label="Users">
              <MenuItem icon={<FontAwesomeIcon icon={faList} />}> List </MenuItem>
            </SubMenu>
            <SubMenu className="layout-sidebar" icon={<FontAwesomeIcon icon={faMoneyBill} />} label="Events">
              <MenuItem icon={<FontAwesomeIcon icon={faCheckToSlot} />}>Reservation  </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faMoneyBill} />}> Events </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faDollarSign} />}> Expense  </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faBug} />}> Reports </MenuItem>
            </SubMenu>
            <SubMenu className="layout-sidebar" icon={<FontAwesomeIcon icon={faChampagneGlasses} />} label="Bar">
              <MenuItem icon={<FontAwesomeIcon icon={faCartShopping} />}> Purchase  </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faIndianRupeeSign} />}> Sales</MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faBug} />}> Report</MenuItem>
            </SubMenu>
            <SubMenu className="layout-sidebar" icon={<FontAwesomeIcon icon={faHotel} />} label="Rooms">
              <MenuItem icon={<FontAwesomeIcon icon={faCheckToSlot} />}> Reservations </MenuItem>
              <MenuItem icon={<FontAwesomeIcon icon={faBug} />}>Reports</MenuItem>

            </SubMenu>
          </Menu>
        </Sidebar>
        <Outlet />
      </Container>
    </>
  );
}

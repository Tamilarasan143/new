import "./sidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  // ProSidebarProvider,
  // useProSidebar,
} from "react-pro-sidebar";
import React from "react";
// import Button from "react-bootstrap/Button";
import {
  FontAwesomeIcon,
  // FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {

  faUsers,
  faList,
  faMoneyBill,
  faHotel,
  faIndianRupeeSign,
  faCartShopping,
  faBug,
  faDollarSign,
  faCheckToSlot,
  faChampagneGlasses,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export default function MySideBar() {
  // const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar className="" style={{ height: "100%" }}>
      <Menu>
        <MenuItem
          icon={<FontAwesomeIcon icon={faDashboard} />}
          routerLink={<Link to="/acc/dashboard" />}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          icon={<FontAwesomeIcon icon={faCalendar} />}
          routerLink={<Link to="/acc/calendar" />}
        >
          Calendar
        </MenuItem>
        <SubMenu
          icon={<FontAwesomeIcon icon={faMoneyBill} />}
          label="Membership"
        >
          <MenuItem
            icon={<FontAwesomeIcon icon={faCheckToSlot} />}
            routerLink={<Link to="/acc/members/list" />}
          >
            Members
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<FontAwesomeIcon icon={faUsers} />} label="Users">
          <MenuItem
            icon={<FontAwesomeIcon icon={faList} />}
            routerLink={<Link to="/acc/users/list" />}
          >
            List
          </MenuItem>
        </SubMenu>

        <SubMenu icon={<FontAwesomeIcon icon={faMoneyBill} />} label="Events">
          <MenuItem
            icon={<FontAwesomeIcon icon={faCheckToSlot} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Reservation
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faMoneyBill} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Events
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faDollarSign} />}
            routerLink={<Link to="/acc/event/purchases" />}
          >
            Expense
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faBug} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Reports
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="layout-sidebar"
          icon={<FontAwesomeIcon icon={faChampagneGlasses} />}
          label="Bar"
        >
          <MenuItem
            icon={<FontAwesomeIcon icon={faCartShopping} />}
            routerLink={<Link to="/acc/bar/purchases" />}
          >
            Purchase
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faIndianRupeeSign} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Sales
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faBug} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Report
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="layout-sidebar"
          icon={<FontAwesomeIcon icon={faHotel} />}
          label="Rooms"
        >
          <MenuItem
            icon={<FontAwesomeIcon icon={faCartShopping} />}
            routerLink={<Link to="/acc/room/purchases" />}
          >
            Purchase
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faCheckToSlot} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Reservations
          </MenuItem>
          <MenuItem
            icon={<FontAwesomeIcon icon={faBug} />}
            routerLink={<Link to="/acc/guest/reservation" />}
          >
            Reports
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

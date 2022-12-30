import "./sidebar.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  ProSidebarProvider,
  useProSidebar,
} from "react-pro-sidebar";
import React from "react";
import Button from "react-bootstrap/Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import {
  faBars,
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
export default function MySideBar() {
  const { collapseSidebar } = useProSidebar();

  return (
    <Sidebar className="" style={{ height: "100%" }}>
      <Menu>
        <MenuItem icon={<FontAwesomeIcon icon={faDashboard} />}>
          Dashboard
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={faCalendar} />}>
          Calendar
        </MenuItem>
        <SubMenu icon={<FontAwesomeIcon icon={faUsers} />} label="Users">
          <MenuItem icon={<FontAwesomeIcon icon={faList} />}> List </MenuItem>
        </SubMenu>
        <SubMenu icon={<FontAwesomeIcon icon={faMoneyBill} />} label="Events">
          <MenuItem icon={<FontAwesomeIcon icon={faCheckToSlot} />}>
            Reservation
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faMoneyBill} />}>
            Events
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faDollarSign} />}>
            Expense
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faBug} />}>Reports</MenuItem>
        </SubMenu>
        <SubMenu
          className="layout-sidebar"
          icon={<FontAwesomeIcon icon={faChampagneGlasses} />}
          label="Bar"
        >
          <MenuItem icon={<FontAwesomeIcon icon={faCartShopping} />}>
            Purchase
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faIndianRupeeSign} />}>
            Sales
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faBug} />}> Report</MenuItem>
        </SubMenu>
        <SubMenu
          className="layout-sidebar"
          icon={<FontAwesomeIcon icon={faHotel} />}
          label="Rooms"
        >
          <MenuItem icon={<FontAwesomeIcon icon={faCheckToSlot} />}>
            Reservations
          </MenuItem>
          <MenuItem icon={<FontAwesomeIcon icon={faBug} />}>Reports</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
}

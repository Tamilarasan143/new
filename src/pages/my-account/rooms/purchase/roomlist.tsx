import React from 'react'
import { Button, Container, Row } from "react-bootstrap";
import DataTable, { Alignment } from "react-data-table-component";
import { Link } from 'react-router-dom';

export default function RoomPurchaseList() {
    const columns = [
        {
          name: "Title",
          selector: (row: any) => row.title,
        },
        {
          name: "Year",
          selector: (row: any) => row.year,
        },
      ];
    
      const data = [
        {
          id: 1,
          title: "Beetlejuice",
          year: "1988",
        },
        {
          id: 2,
          title: "Ghostbusters",
          year: "1984",
        },
      ];
    
      return (
        <>
          <Container>
            <Row>
              <h3>Guest Room Reservation</h3>
            </Row>
            <DataTable
              columns={columns}
              data={data}
              subHeaderAlign={Alignment.RIGHT}
            //   actions={actionsMemo}
              selectableRows
              pagination
              responsive
              subHeaderWrap
            />
            <Button variant="primary" type="submit"><Link to={"/acc/room/purchase/create"}>Add</Link></Button>
          </Container>
        </>
      );
}

import { Container, Row } from "react-bootstrap";
import DataTable, { Alignment } from "react-data-table-component";

export default function GuestRoomReservation() {
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
          selectableRows
          pagination
          responsive
          subHeaderWrap
        />
      </Container>
    </>
  );
}

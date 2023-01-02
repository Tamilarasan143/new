import { Container, Row } from "react-bootstrap";

export default function MyCalender() {
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
  return (
    <Container>
      <Row>
        <h3>Guest Room Reservation</h3>
      </Row>
    </Container>
  );
}

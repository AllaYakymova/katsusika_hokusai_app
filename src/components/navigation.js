'use client'
import Link from "next/link";
import {Container, Navbar, Nav} from "react-bootstrap";

export default function NavComponent() {

  return (
    <header>
      <Container>
        <Navbar>
          <Navbar.Brand>
            <Link href='/'></Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} href='/'>Home</Nav.Link>
            <Nav.Link as={Link} href='/bio'>Bio</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </header>
  )
}
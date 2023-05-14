import React from 'react';
import { Container } from 'react-bootstrap';

const styles = {
  footer: {
    position: "relative",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#f8f9fa",
    padding: "10px 0",
  }
};

export default function Footer() {
  return (
    <footer className='mt-5' style={styles.footer}>
      <Container className='text-center' >
        <p>&copy; {new Date().getFullYear()} Flix</p>
      </Container>
    </footer>
  )
}

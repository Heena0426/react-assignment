import React, { useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function List() {
    const [data, setData] = useState([
        { firstname: 'Heena ', lastname: 'Dongarkar' },
        { firstname: 'Mitali', lastname: 'Dere' },
        { firstname: 'Daniya', lastname: 'Bhatkar' },
        { firstname: 'Zainab', lastname: 'Dongarkarnpm ' },
        { firstname: 'Sadiya', lastname: 'Phansopkar' },
        
    ]);

    let i = 1;

    return (
        <Container>
            <h1>Student Names</h1>
            <ListGroup>
                {data.map((student) => (
                    <ListGroup.Item variant="dark" key={student.firstname}>{i++}. {student.firstname} {student.lastname}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}
import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Card } from "../types/model";
import { AiOutlineDelete } from "react-icons/ai";

interface Props {
    email: string;
    password: string;
    list: Card[];
    setList: React.Dispatch<React.SetStateAction<Card[]>>;
}

const FormList: React.FC<Props> = ({ email, password, list, setList }) => {
    return (
        <>
            <Container>
                <h3 className="title">Contact List</h3>
                <hr></hr>
                <div className="FormList">
                    {list.map((a) => (
                        <ListGroup>
                            <ListGroup.Item>{a.email}</ListGroup.Item>
                            <ListGroup.Item>{a.password}</ListGroup.Item>
                        </ListGroup>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default FormList;

import { Button, Card, Col, Popconfirm, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { delete_animal_data } from "../redux/action/action";

const Display = ({ animals, loading }) => {
  const dispatch = useDispatch();

  // handle item delete
  const handleItemDelete = (id) => {
    dispatch(delete_animal_data(id));
  };
  return (
    <div>
      {loading ? (
        <p
          style={{
            fontSize: "5rem",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Loading...
        </p>
      ) : (
        <div>
          <p style={{ fontSize: "2rem", textAlign: "center", padding: "20px" }}>
            Total recorded animal: ${animals.length}
          </p>

          <Row gutter={[8, 8]}>
            {animals.map((animal) => (
              <Col key={animal.id} sm={24} md={12} lg={8} xl={6}>
                <Card style={{ height: "180px", padding: "10px" }}>
                  <p>{animal.animalDescription}</p>
                  <p>{animal.animalName}</p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "end",
                      marginTop: "10px",
                    }}
                  >
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={()=> handleItemDelete(animal.id)}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        type="delete"
                      >
                        Del
                      </Button>
                    </Popconfirm>
                    <Button>Update</Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Display;

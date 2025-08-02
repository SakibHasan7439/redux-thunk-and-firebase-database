import { Button, Card, Col, Row } from "antd";
import React from "react";

const Display = ({ animals, loading }) => {
  return (
    <div>
      {loading ? (
        <p 
            style={{fontSize:'5rem', textAlign: 'center', fontWeight:'bold', textTransform:'uppercase'}}>
                Loading...
        </p>

      ) : (
        <div>
          <p style={{ fontSize: "2rem", textAlign: "center", padding: "20px" }}>
            Total recorded animal: ${animals.length}
          </p>

          <Row gutter={[8, 8]}>
            {
                animals.map((animal) =><Col key={animal.id} sm={24} md={12} lg={8} xl={6}>
              <Card style={{height: '180px', padding: '10px'}}>
                <p>{animal.animalDescription}</p>
                <p>{animal.animalName}</p>

                <div style={{display: 'flex', justifyContent: "end", alignItems: 'end', marginTop: '10px'}}>
                    <Button type="delete">Del</Button>
                    <Button>Update</Button>
                </div>
              </Card>
            </Col>)
            }
          </Row>
        </div>
      )}
    </div>
  );
};

export default Display;

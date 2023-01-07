import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/Ekran Görüntüsü (55).png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Car Rental Project",
      imgUrl:
        "data:image/jpeg;base64,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",
    },
    {
      title: "Tactical Tracking System",
      imgUrl: projImg2,
    },
    {
      title: "Vaccine Appointment",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ohFbbHL-TU2T7MjvmRqi_gFiaN5tiVPQQLXnYJv6o46h3tlxq6GX6YG64BlaBnweRjc&usqp=CAU",
    },
    {
      title: "Library App",
      imgUrl:
        "https://basmo.app/wp-content/uploads/2021/07/how-many-books-does-the-average-person-read.gif",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

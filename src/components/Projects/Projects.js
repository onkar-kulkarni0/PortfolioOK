import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import eCom from '../../Assets/Projects/Hackerrank.png'
import taskify from '../../Assets/Projects/FlashType.png'
import easyCode from '../../Assets/Projects/OpenBoard.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: 'white'}}>
          These are a few projects I've worked on recently.
        </p>
        <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskify}
              isBlog={false}
              title="FlashType"
              description="A platform for testing your typing speed. In about 1 minute, you can test your typing speed. You will also be notified if you type the incorrect words. React life cycle method, react timer, react state,react props, and other technologies are used. It is the best place to increase your typing speed and accuracy. "
              link="https://github.com/onkar-kulkarni0/FlashType_"
              liveLink="https://onkar-kulkarni0.github.io/FlashType_/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="Smart Board"
              description="Smart board is a personal open board using Canvas. Realtime pencil, erase, sticky notes, etc functions are implemented. Made use of Javascript for real-time mouse-up and mouse-down functions. Technologies like socket.io, tools.io, etc are used."
              link="https://github.com/onkar-kulkarni0/Smart-Board"
              liveLink="https://open-board787.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Hackerank Automation"
              description="The Hackerrank Automation tool is useful for adding moderators to hackerrank contests. The true goal of this project is to learn Web Automation. The programming language used is JavaScript. Concepts like async-await, waitforselector, timer, loops, etc are used.This was achieved with help of Puppeteer technology(tool)."
              link="https://github.com/onkar-kulkarni0/Modified-Hackerrank-Automation"
              liveLink="https://github.com/onkar-kulkarni0/Modified-Hackerrank-Automation"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
              link="https://github.com/MohitSojitra/react-blog-website"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Artistee Web"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Artistee Admin Pannel"
              description="Aristee is a basic Full Stack websites which contains all the module such as a Admin Panel , Fronend Website and Backend. It inspired by united talent websites which is a use for book Artist for performing live shows
                            In here i used mainly aws services for handling backend things such as Amazon RDS for database, Amazon SES sercvice for mail perpose and S3 for storing images."
              link="https://github.com/MohitSojitra/Artistee"
              liveLink="https://artistee-admin.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects

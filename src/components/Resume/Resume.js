import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
import Resumecontent from './ResumeContent'
import pdf from '../../Assets/Resume_Kulkarni_Onkar.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Front end developer [Suven Technologies]"
              date="july 2022 - october 2022"
              content={[
                'Worked on the platform using JavaScript functionContributed to Optimised codes for Cross Browsing platforms.',
                'Maintained client-side Framework with the help of libraries.',
                'Worked with Javascript for large scaling problems and ES6 compatibility.',
                'Worked on React.js library for the frontend part. Used React tools like Redux, Webpack, and Next.js.',
              ]}
            />
            <Resumecontent
              content={[
                '',
                '',
              ]}
            />
            <h3 className="resume-title">Course Work</h3>
            <Resumecontent
              title=""
              content={[
                'Data Structures & Algorithms',
                'Object Oriented Programming (OOPs)',
                'Database Management System',
                'Machine Learning',
              ]}
            />
            <Resumecontent
            
              // title="Tools"
              content={[
                // '',
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics and Tele-communication Engineering (MITAOE)"
              date="2019 - 2023"
              content={[
                `CGPA: 7.93/10 `,
                // 'I was complete my bachelor degree fron R.N.G Patel Institute of Technology.',
              ]}
            />

            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `LeetCode : Solved 200+ problems.`,
                `Secured 412th rank out of 14850 in Netwon’s School coding challenge.`,
                'Secured 4th rank in hacker-rank 10 days challengeorganized by Codechef MITAOE.',
              ]}
            />


            <h3 className="resume-title">Tools</h3>
            <Resumecontent
              title=""
              content={[
                'React.js', ' Node.js ' ,'Websockets' ,'Firebase' , 'Tailwind CSS','Redux ',' Puppeteer',
              ]}
            />
          </Col>
        </Row>
        <Row style={{justifyContent: 'center', position: 'relative'}}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  )
}

export default Resume

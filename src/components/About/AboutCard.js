import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Onkar Kulkarni </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I am a tech enthusiast.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Web Series
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "It is only when they go wrong that machines remind you how powerful they are."{' '}
          </p>
          <footer className="blockquote-footer">Clive James</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard

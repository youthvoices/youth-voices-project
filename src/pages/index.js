import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p><strong>{config.subHeading}</strong></p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            What is the Youth Voices Project?
          </h2>
          <p>
            The Youth Voices Project is a YPAR initiative
            based in a housing community in the greater Lansing area of Michigan. Through culturally relevant and sustaining
            student-led programming, the project seeks to amplify
            the voices of youth who are not traditionally
            heard in educational settings.
            For more information on YPAR as a methodology, visit the <a href="http://yparhub.berkeley.edu">YPAR Hub</a>.
          </p>
          <p>
            Every word and image in this website can be freely
            edited by any of the Youth Voices Project participants,
            including students and staff within the community, faculty, and undergraduate and graduate students
            at Michigan State University.
          </p>
        </header>

      </div>
    </section>

    <section id="two" className="wrapper alt style2">

      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Supporting Community Through Student-Led Fundraising
          </h2>
          <p>
            Students within the Youth Voices Project, in collaboration with
            the Youth Director at the housing community, created a fundraiser to
            support local community members during the COVID-19 pandemic. In a short
            period of time, the fundraiser has been able to raise over $7,000 for the commumity.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
        <h2>
          Enacting Culturally Responsive-Sustaining YPAR during COVID-19
        </h2>
          <p>
          Six participants in the Youth Voices Project came together to write
          a paper in a special issue of the <i>Journal for Multicultural Education</i> that examined what happened when the project was interrupted by the physical
          distancing necessitated by COVID-19.
          </p>
        </div>
      </section>

      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Netflix and ... Learn?
          </h2>
          <p>
            To adapt to the physical distancing requirements brought on by the COVID-19
            pandemic, participants in the Youth Voices project gathered every week on
            Zoom to share "rants and raves" from their lives. The students proposed structured
            activities, which included watching Netflix movies and documentaries around social
            justice issues and sharing what they watched with one another.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Photovoice</h2>
          <p>
            Photovoice is a unique form of participatory action research
            that uses photography to capture the conditions of a community.
            While participants were complying with Michigan's
            stay-at-home orders as a result of COVID-19, the participants decided
            to engage in a photovoice project to capture personally meaningful objects
            with which they were surrounded on a daily basis.
          </p>
          <p>Visit our <a href="">photovoice</a> page to learn more.</p>
        </header>

      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Collaboration</h2>
          <p>
            The Youth Voices Project is a collaboration between students and staff
            at a local housing community
            in the greater Lansing area and Michigan State University.
          </p>
        </header>
        <ul className="actions stacked">

          <li>
            <a href="https://education.msu.edu" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    var projects = [
      { name: 'Moments', image: 'thumbnails/moments.png', position: 'center center', description: 'I love photography. And here\'s a gallery I built to share moments with my family.' },
      { name: '蘭亭 Lanting', image: 'thumbnails/lanting.png', position: 'top right', description: '探索最美丽的书法作品。Exploring the greatest Chinese calligraphy of all time.' },
      { name: 'Energy', image: 'thumbnails/energy.png', position: 'center center', description: 'An journalism visualization project on the topic of how media covers news on nuclear power.' },
      { name: 'GroupNGo', image: 'thumbnails/groupngo.png', position: 'center left', description: 'An app that helps Georgia Tech student gets around campus safely.' },
      { name: 'Reach.IO', image: 'thumbnails/reachio.jpg', position: 'center center', description: 'The interaction that further the reach of your thumb on a touch device.' },
      { name: 'TrueSight', image: 'thumbnails/truesight.png', position: 'center center', description: 'I have never been good at the game of Dota 2. But our team want to build a data visualization tool that helps me get there.' }
    ];

    var links = [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muzimickey/', icon: 'css/images/linkedin.svg' },
      { name: 'GitHub', url: 'https://github.com/redbeardmickey', icon: 'css/images/github.svg' },
      { name: 'CodePen', url: 'http://codepen.io/tmac/', icon: 'css/images/codepen.svg' }
    ]

    var thumbnails = projects.map(project => {
      var style = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("images/' + project.image + '")' + project.position,
        'background-size': 'cover'
      };
      return (
        <div className="work-thumbnail-col thumbnail" style={style}>
          <h4 className="thumbnail-title">{project.name}</h4>
          <p className="thumbnail-description">{project.description}</p>
        </div>
      )
    })

    var contactListItems = links.map(link => {
      return (
        <li><a href={link.url} target="_blank"><img src={link.icon} alt=""></img><span className="contact-list-item">{link.name}</span></a></li>
      )
    })

    return (
      <div>

        <section id="about">
          <span className="about-bg-line-wrapper">
            <span className="about-bg-line about-bg-line-1"></span>
            <span className="about-bg-line about-bg-line-2"></span>
            <span className="about-bg-line about-bg-line-3"></span>
            <span className="about-bg-line about-bg-line-4"></span>
          </span>
          <div className="about max-width row">
            <div className="about-name-col">
              <h1>Mickey Muzi Li</h1>
              <h3>UX Developer</h3>
            </div>
            <div className="about-photo-col">
              <img className="profile-pic" src="profile_primitive.svg" alt="mickey at indian wells"></img>
            </div>
          </div>
          <div id="WhoIAm" className="max-width row">
            <h2>Who I am</h2>

            <div className="about-description-col">
              <p>Being a UX developer, I am always passionate about technology and enjoy the design process as much as crafting prototypes.</p>
              <p>I am an alumnus of Georgia Tech’s MS of Human-Computer Interaction program, with a specializtion in Interactive Computing. Before that, I received my BS degree in Electrical Engineering from Nanjing University, China.</p>
              <p>Residing in the San Francisco Bay Area, I am a big Warriors fan, frequent rider on snowy mountains near Lake Tahoe and self-entertained home-recording artist at the same time.</p>
            </div>
            <div className="about-links-col">
              <ul className="contact-list">
{contactListItems}
              </ul>
            </div>
          </div>
        </section>

        <section id="work" className="">
          <div className="max-width about-content-section">
            <h2 className="">Work</h2>
          </div>
          <div className="row">
            {thumbnails}

          </div>
        </section>

        <section id="resume" className="resume max-width about-content-section">
          <h2>Resume<span className="pdf-button">PDF</span></h2>
          <div className="row">
            <div className="resume-experience-col">
              <h3>Work Experience</h3>
              <ul>
                <li>
                  <h4>User Experience Developer</h4>
                  <i>Oracle, Aug 2015 - Present</i>
                  <div>
                    <p>- Lead developer of a sample progressive web app with full offline support that can also be extended to a hybrid mobile app with cordova plugins. Using Oracle JET and Mobile Cloud Service, the app helps both internal and external customers uptake the framework.</p>
                    <p>- UX developer of prototypes of several components, UI patterns, layout templates and POCs for Oracle JET.</p>
                    <p>- Front-end developer of the header, navigation, footer and global search UI for Oracle Alta site.</p>
                  </div>
                </li>
                <li>
                  <h4>Human-Machine Interaction Engineering Intern</h4>
                  <i>Bosch Research and Technology Center, May 2014 - Aug 2014</i>
                  <p>- UX developer of two working prototypes for in-vehicle infotainment apps with voice modality.</p>
                </li>
                <li>
                  <h4>Graduate Teaching Assistant</h4>
                  <i>Georgia Institute of Technology, Jan 2014 - May 2015</i>
                </li>
              </ul>
              <h3>Education</h3>
              <ul>
                <li>
                  <h4>Georgia Institute of Technology</h4>
                  <i>M.S. Human-Computer Interaction, Aug 2013 - May 2015</i>
                </li>
                <li>
                  <h4>Nanjing University</h4>
                  <i>B.S. Electrical Engineering, Sep 2009 - Jun 2013</i>
                </li>
              </ul>
            </div>
            <div className="resume-skills-col">
              <h3>Skills</h3>
              <h4>UI Prototyping</h4>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </ul>
              <h4>Front-end Development</h4>
              <ul className="skills-list">
                <li>knockout.js</li>
                <li>SASS/SCSS</li>
                <li>Cordova</li>
              </ul>
              <h4>UX Design</h4>
              <ul className="skills-list">
                <li>User-Centered Design</li>
                <li>Storyboarding</li>
                <li>Wireframing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default About;

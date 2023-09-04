import React from 'react';
import { Col, Row, Card } from 'antd';
import '../css/middlebody.css';
import { Rate } from 'antd';

const Skills = () => (
    <div className="m-b">
        {' '}
        <h1 className="my-5">Skills</h1>
        <Row className="skill-row" gutter={[24, 16]}>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Web Technologies</span>
                    </div>
                    <div className="skill-container">
                        <span>HTML</span> <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span> CSS</span> <Rate disabled defaultValue={4} />
                    </div>{' '}
                    <div className="skill-container">
                        <span> Sass</span> <Rate disabled defaultValue={4} />
                    </div>{' '}
                    <div className="skill-container">
                        <span> Javascript/Typescript</span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>{' '}
                </Card>
            </Col>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Languages</span>
                    </div>
                    <div className="skill-container">
                        <span> Python</span> <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span> C</span> <Rate disabled defaultValue={3} />
                    </div>
                    <div className="skill-container">
                        <span> C++</span> <Rate disabled defaultValue={3} />
                    </div>{' '}
                    <div className="skill-container">
                        <span> Java</span> <Rate disabled defaultValue={3} />
                    </div>{' '}
                </Card>
            </Col>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Frameworks</span>
                    </div>
                    <div className="skill-container">
                        <span> React JS</span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span> Node JS</span> <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span> Angular JS</span>{' '}
                        <Rate disabled defaultValue={3} />
                    </div>{' '}
                    <div className="skill-container">
                        <span> Nest JS</span> <Rate disabled defaultValue={4} />
                    </div>{' '}
                </Card>
            </Col>
        </Row>
        <h1 className="my-5"></h1>
        <Row className="skill-row" gutter={[24, 16]}>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Mobile Technologies</span>
                    </div>{' '}
                    <div className="skill-container">
                        <span> React Native</span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>{' '}
                    <div className="skill-container">
                        <span>Android development </span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span>Capacitor JS </span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>
                </Card>
            </Col>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Testing Frameworks</span>
                    </div>{' '}
                    <div className="skill-container">
                        <span>Cypress</span> <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span>Jest</span>
                        <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span>Storybook</span>{' '}
                        <Rate disabled defaultValue={3} />
                    </div>
                </Card>
            </Col>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Databases</span>
                    </div>{' '}
                    <div className="skill-container">
                        <span> PostgreSQL</span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>
                    <div className="skill-container">
                        <span> MySQL</span> <Rate disabled defaultValue={3} />
                    </div>
                    <div className="skill-container">
                        <span>MongoDB</span> <Rate disabled defaultValue={4} />
                    </div>{' '}
                </Card>
            </Col>
        </Row>
        <h1 className="my-5"></h1>
        <Row className="skill-row" gutter={[24, 16]}>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Python GUI Frameworks</span>
                    </div>
                    <div className="skill-container">
                        <span> PyQT5/Tkinter</span>{' '}
                        <Rate disabled defaultValue={3} />
                    </div>{' '}
                    {/* <div className="skill-container">
                        <span> </span> <Rate disabled defaultValue={3} />
                    </div>{' '} */}
                    <div className="skill-container">
                        <span> Flask</span> <Rate disabled defaultValue={3} />
                    </div>
                </Card>
            </Col>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Operating Systems</span>
                    </div>{' '}
                    <div className="skill-container">
                        <span> Windows</span> <Rate disabled defaultValue={4} />
                    </div>{' '}
                    <div className="skill-container">
                        <span>Ubuntu </span> <Rate disabled defaultValue={4} />
                    </div>
                </Card>
            </Col>
            <Col xs={23} sm={24} md={12} lg={8} xl={8}>
                <Card className="shadow-md">
                    <div className="skill-container skill-container-header">
                        <span>Tools and Softwares</span>
                    </div>{' '}
                    <div className="skill-container">
                        <span> Supabase/Firebase</span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>{' '}
                    <div className="skill-container">
                        <span> Gitlab/JIRA</span>{' '}
                        <Rate disabled defaultValue={4} />
                    </div>{' '}
                </Card>
            </Col>
        </Row>
    </div>
);

export default Skills;

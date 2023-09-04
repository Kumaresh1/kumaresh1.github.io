import React from 'react';
import { Row, Col, Card } from 'antd';

const ProjectsSection = () => {
    const projectsData = [
        {
            title: 'Template Builder Rewrite',
            date: 'Feb 2022 - Jul 2022',
            company: (
                <span>
                    Associated with{' '}
                    <span style={{ fontWeight: 'bold' }}>Maximl</span>
                </span>
            ),
            description: `Decreased the number of clicks needed to build a template by 28%. Increased the performance by 34% by optimizing and clearing memory leaks. Contributed to the development of a drag and drop interface and workflow engine using React Beautiful Dnd. Played a key role in building a no-code platform for enterprise-wide digitalization. Built rich industrial applications with a drag and drop interface for seamless digitization. Automated workflows by implementing an advanced workflow engine, enabling quick creation of approval flows. Empowered data-driven decision-making by providing real-time data from the field.`,
            skills: 'Skills: Redux.js · React.js',
        },
        {
            title: 'Emotion detector Chat Bot using BERT',
            date: 'Jan 2022 - Mar 2022',
            link: 'https://github.com/Kumaresh1/Sentiment-analysis',
            company:
                "Developed a chatbot that utilizes the powerful BERT (Bidirectional Encoder Representations from Transformers) model for emotion prediction. By analyzing text inputs, the chatbot accurately predicts and understands the underlying emotions of the users. The frontend of the chatbot is built using React.js, providing a seamless and interactive user interface for a smooth user experience. This combination of BERT's natural language processing capabilities and React.js frontend technology allows for effective communication and understanding of emotions in real-time conversations. The chatbot brings a new level of emotional intelligence to enhance user interactions and support various applications.",
            skills: 'Skills: Machine Learning · Flask · React.js',
        },
        {
            title: 'Track Expiry Dates Using Optical Character Recognition with Business Analytics',
            date: 'Sep 2021 - Mar 2022',
            link: 'https://github.com/Kumaresh1/ocr-fyp-rn',
            company: (
                <span>
                    Associated with{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        SSN College of Engineering
                    </span>
                </span>
            ),
            description: `This project focuses on developing a mobile application for securely storing and managing personal and general documents. Users can store items like driving licenses, passports, warranty cards, bills, and more. The app not only tracks expiry dates but also sends reminder notifications to users and their family members. Additionally, businesses can utilize the data for analysis and gain insights into product performance. The project utilizes React Native for the frontend, Redux for state management, MongoDB Cloud platform for the backend, and Node.js as a middleware. The integration of Google ML Kit enables the extraction of text from scanned documents. Overall, this project aims to revolutionize document management while providing a seamless user experience.`,
            skills: 'Skills: Machine Learning · Redux.js · React Native',
        },
        {
            title: 'Drowsiness detection using ML and Analytics',
            date: 'Sep 2021 - Dec 2021',
            company:
                'This project consists of three main modules: the machine learning (ML) module, the frontend module, and the backend module. The ML module focuses on eye detection techniques, training data collection, ML model selection, and evaluation metrics for drowsiness prediction. The frontend module, developed using React, includes user interface design, real-time data display, analytics components, driver blocking functionality, and user authentication. The backend module utilizes Supabase for real-time data synchronization and storage, along with APIs for data retrieval and modification. The project integrates the ML module with the frontend, and the database stores trip data, performance metrics, and images collected during trips.',
            skills: 'Skills: Machine Learning · Flask · React.js',
            link: 'https://github.com/Kumaresh1/Drowsiness_detection',
        },
        {
            title: 'Employee Attendance tracking and Stock Management',
            date: 'Jun 2021 - Dec 2021',
            company: (
                <span>
                    Associated with{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        Buoyant project solutions{' '}
                    </span>
                </span>
            ),

            description: `We developed a mobile-first solution that enables efficient tracking and monitoring of employee statuses within the company warehouse. By utilizing location services with utmost accuracy, the app provides real-time updates on employee movements. To overcome challenges related to slow or zero network connectivity, I optimized the application to leverage Bluetooth technology via Raspberry Pi devices. This ensures uninterrupted functionality even in low network environments. Additionally, I designed and deployed a comprehensive dashboard that allows for monitoring live feeds and creating customized functions tailored to specific requirements. This solution significantly enhances operational efficiency and enables better workforce management within the warehouse environment.`,
            skills: 'Skills: Android Development · SASS · HTML · Data Structures · Cascading Style Sheets (CSS) · JavaScript',
        },
        {
            title: 'Course Registration System',
            date: 'Aug 2020 - Dec 2020',
            company: (
                <span>
                    Associated with{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        SSN College of Engineering
                    </span>
                </span>
            ),
            description: `The online course registration system provides real-time information about available courses and user details. Users, including students, faculties, and admins, can access various functions based on their role. Members can view updated course catalogs, check and modify their account information within a valid period, and choose a trial mode for a specified time. They can also unenroll themselves during the trial period, but refunds are not available after that. Admins have the authority to add or delete courses, access information of all enrolees, and receive payment details. The system requires users to have basic computer and internet browsing knowledge, while the admin needs internet server capabilities to manage the system.`,
            skills: 'Skills: Node.js',
        },
        {
            title: 'Weather Prediction using Machine Learning - ML, pandas, matplotlib, numpy',
            date: 'Aug 2020 - Dec 2020',
            company: (
                <span>
                    Associated with{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        SSN College of Engineering
                    </span>
                </span>
            ),
            description: `In this project on weather prediction, we have employed a range of algorithms including Random Forest Regression, Decision Tree Regression, K-Nearest Neighbors (KNN) algorithm, Support Vector Regression, and Gradient Boosting algorithm. Through rigorous analysis, we have determined that the Random Forest algorithm outperforms the others in terms of accuracy and reliability. Additionally, our ensemble model, which combines the strengths of multiple algorithms, has also shown promising results. By leveraging these advanced techniques, we aim to provide accurate temperature predictions by considering various factors that influence weather patterns.`,
            skills: 'Skills: Machine Learning · Python (Programming Language)',
            link: 'https://github.com/Kumaresh1/weather_prediction',
        },
        {
            title: 'Shop management system using Python, Pyqt5 and Openpyxl',
            date: 'Apr 2020 - Jun 2020',
            company:
                'Developed a comprehensive Shop Management System using Python, Pyqt5, and Openpyxl. This system offers efficient and organized management of various aspects of a shop, including inventory, sales, and customer information. Python served as the primary programming language, while Pyqt5 was utilized for creating a user-friendly graphical user interface. Openpyxl facilitated seamless integration with Excel spreadsheets for data storage and manipulation. The Shop Management System enhances productivity and streamlines operations, providing a reliable solution for managing shop-related tasks.',
            skills: 'Skills: Python (Programming Language)',
            link: 'https://github.com/Kumaresh1/ShopManagementSystem',
        },
        // Add more project data here...
    ];

    return (
        <div className="projects-section mypro " style={{ marginBottom: 120 }}>
            <div className="m-b">
                <h1>Projects</h1>
            </div>

            <Row gutter={[16, 16]} style={{ margin: '-220px 0px 20px 20px' }}>
                {projectsData.map((project, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <Card
                            title={
                                project.link ? (
                                    <a href={project.link} target="_blank">
                                        {project.title}
                                    </a>
                                ) : (
                                    project.title
                                )
                            }
                            extra={project.date}
                            style={{ fontSize: '15px' }}
                        >
                            <p>{project.company}</p>
                            <p>{project.description}</p>
                            <p style={{ fontWeight: 'bold' }}>
                                {project.skills}
                            </p>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div id="contact"></div>
        </div>
    );
};

export default ProjectsSection;

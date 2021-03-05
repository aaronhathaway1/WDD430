import { Document } from './document.model';

export const MOCKDOCUMENTS: any[] = [
  {
    id: '1',
    name: 'CIT 425 - Data Warehousing',
    description: 'This course defines the theory and practice of data analysis.  The course will compare and contrast the operational and analytical database models.  Students will learn how to define, implement, and query a database warehouse by leveraging sample data warehouses built from Enterprise Resource Planning (ERP) and Customer Resource Management (CRM) solutions.',
    url: 'https://rkjdatawarehousing.wordpress.com/',
    children: [
      {
        id: '2',
        name: 'Project 1 – The Kimball Method',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-1-the-kimball-method/'
      },
      {
        id: '3',
        name: 'Project 2 – Data warehouses vs. marts',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-2-data-warehouses-vs-marts/'
      },
      {
        id: '4',
        name: 'Project 3 – The ETL Process',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-3-the-etl-process/'
      },
      {
        id: '5',
        name: 'Project 4 – Modify the OLTP design',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-4-oltp-modifications-to-erp-design/'
      },
      {
        id: '6',
        name: 'Project 5 – The OLAP design',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-4/'
      },
      {
        id: '7',
        name: 'Project 6 – Transforming data',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/transforming-data/'
      },
      {
        id: '8',
        name: 'Project 7 – MarkLogic',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-7-marklogic/'
      },
      {
        id: '9',
        name: 'Project 8 – Build a web application',
        url: 'https://rkjdatawarehousing.wordpress.com/projects/project-8/'
      }
    ]
  },
  {
    id: '10',
    name: 'CIT 460 - Enterprise Development',
    description: 'Introduces students to virtualization technologies used in enterprise systems to overcome challenges associated with building and maintaining highly scalable and resilient IT infrastructure. Topics include the virtualized approaches to datastore, compute, and networking, cloud computing models and their uses, and containerization. Students will learn how to administer virtualized enterprise systems, including the configuration and management of hypervisors, virtual machines, datastores, and virtual switches.',
    url: 'https://rkjackson.wordpress.com/',
    children: [
      { id: '12', name: 'Case 1 – Defining the requirements', url: 'https://rkjackson.wordpress.com/cases/case-1/' },
      { id: '13', name: 'Case 2 – User Interface design', url: 'https://rkjackson.wordpress.com/cases/case-2/' },
      {
        id: '14', name: 'Case 3 – Implementing Model Layer', url: 'https://rkjackson.wordpress.com/cases/case-3/',
        children: [
          { 'id': '36', name: 'Team Assignment', 'description': 'Create your first JavaBean class' }
          , { 'id': '37', name: 'Individual Assignment', 'description': 'Create remaining JavaBean classes' }
        ]
      },
      { id: '15', name: 'Case 4 – Enterprise Java Session Beans', url: 'https://rkjackson.wordpress.com/cases/case-4/' },
      { id: '16', name: 'Case 5 – Implementing the View', url: 'https://rkjackson.wordpress.com/cases/case-5/' },
      { id: '17', name: 'Case 6 – A Framework for the View Layer', url: 'https://rkjackson.wordpress.com/cases/case-6/' }
    ]
  },
  {
    id: '20',
    name: 'CIT 366 - Full Web Stack Development',
    description: `This course will teach you how to design and build interactive web based
    applications using HTML, CSS, JavaScript, and a web development stack.`,
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
    children: [
      {
        'id': '21',
        'name': 'Lesson 1 - JavaScript Best Practices',
        'url': 'https://content.byui.edu/file/f0594919-9524-47eb-9f4d-5c7239c3c002/1/Lesson1Introduction.pdf'
      },
      {
        'id': '22',
        'name': 'Lesson 2 - The DOM and JQuery',
        'url': 'https://content.byui.edu/file/c67e59fd-990c-4adc-9232-8027f847c8b9/1/Lesson2Introduction.pdf'
      },
      {
        'id': '23',
        'name': 'Lesson 3 - Angular 2 Framework 1',
        'url': 'https://content.byui.edu/file/aa9b6af5-b882-48f5-8321-caca980e5ec9/1/Lesson3Introduction.pdf'
      },
      {
        'id': '24',
        'name': 'Lesson 4 - Angular 2 Framework 2',
        'url': 'https://content.byui.edu/file/2c4ddd6c-dce4-408d-b581-f254a13e4d10/1/Lesson4Introduction.pdf'
      },
      {
        'id': '25',
        'name': 'Lesson 5 - Angular 2 Framework 3',
        'url': 'https://content.byui.edu/file/66dc0765-22a7-4cd8-a184-942c607636fb/1/Lesson5Introduction.pdf'
      }
    ]
  },
  {
    id: '40',
    name: 'CIT 225  - Database Design and Development',
    description: `Includes concepts and principles of database theory, application, and management technologies: logical and physical database design and implementation; use of UML semantic to describe Entity Relationship Designs (ERDs) and SQL to implement relationships between entities; SQL is used to query and transact against a sample database.

    This course has a reputation for being very challenging. Some tips for success include the following:
    Class lectures assume you have done the reading. You should also read lab assignments before coming to the lab each week. The instructor provides a few minutes during the beginning of class to answer questions on course content and material. It is the student's responsibility to review the material, prepare and ask questions. Class administration will be covered at the beginning of each meeting. If you are late, it is your responsibility to get the information from a classmate or visit the instructor's office during posted office hours or by arrangement. The class makes extensive use of the written materials and benefit greatly from the assigned and optional textbooks. You can access the web pages from iLearn or directly from the Internet.',
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf`,
  },
  {
    id: '41',
    name: 'CIT 240 - Introduction to Networking',
    description: "This course teaches general networking principles to provide an understanding of data communication protocols, transmission systems, media, and software.",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '42',
    name: 'CIT 370 - Computer Security I',
    description: "The purpose of this class is to help each student develop the skills necessary to become a security expert in whatever domain of computer security that is important to their job when they enter the workforce.",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '43',
    name: 'CIT 360 - Object Oriented Programming II',
    description: "Students in this course use object-oriented concepts and technologies to develop client-server applications. These client-server applications will use technologies such as Java, servlets, Android, Android Room, Firebase Real-time Database, Hibernate, and JSON.",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '44',
    name: 'CIT 470 - Computer Security II',
    description: "The purpose of this lab based course is to teach students techniques for securing the entire network architecture both internally and externally. Students will learn how to configure and use firewalls and intrusion detection/prevention systems. In addition, students will learn how to harden operating systems and secure remote access",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '45',
    name: 'CIT 262 - Mobile Development',
    description: "WDD 330 will continue with the topics presented in WDD 230 Web Front-end Development I: Building websites with HTML, CSS and Javascript. This course will have a stronger emphasis on Javascript development and mobile design as students create mobile web applications.",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '46',
    name: 'CIT 230 - Web Page Development',
    description: "This course focuses on the planning and development of web sites using HTML, CSS, JavaScript and PHP with attention to usability principles.",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '47',
    name: 'CIT 236 - Web Development',
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
  {
    id: '48',
    name: 'CIT 340 - Networking II',
    description: "This course teaches the principles of network standards and architectures that correspond to the Interconnecting Cisco Networking Devices Part 2 (ICND2) standard. Students will learn the configuration and use of networking devices and protocols including LAN switching technologies, IPv4 and IPv6 routing technologies, WAN technologies, infrastructure services, and infrastructure maintenance.",
    url: 'https://content.byui.edu/file/b7c3e5ed-6947-497f-9d32-4e5b6b397cac/1/CIT 366 course description.pdf',
  },
];

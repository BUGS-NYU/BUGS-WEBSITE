export interface Event {
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  cover: string;
}

export const EVENTS: Event[] = [
  {
    title: 'BUGS Kickoff Event',
    description: 'Get to know your new eBoard through their favorite open source tools and feel free to share/promote your own!',
    date: new Date('February 9, 2024'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: 'images/events/tbd.png',
  },
  {
    title: 'Meet and Greet',
    description: 'Join us and learn about what BUGS@NYU is and meet the e-board!',
    date: new Date('February 17, 2023'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: '/images/events/meet-and-greet.gif',
  },
  {
    title: 'Git Workshop',
    description:
      'Customize your GitHub profile while learning about the Git version control system.',
    date: new Date('February 24, 2023'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: '/images/events/git-workshop.gif',
  },
  {
    title: 'Web Scraping Workshop',
    description: 'Learn about web scraping with Playwright.',
    date: new Date('March 24, 2023'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: '/images/events/scraping.jpeg',
  },
  {
    title: 'Web Development Workshop',
    description: 'Build your own website in React in our hands-on workshop.',
    date: new Date('March 31, 2023'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: '/images/events/web-dev.jpeg',
  },
  {
    title: 'Game Boy Emulation Workshop',
    description: 'Get a technical overview of emulation and learn how a Game Boy emulator is made.',
    date: new Date('April 7, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: '6 Metrotech 7th floor (JAB775)',
    cover: '/images/events/game-boy.jpg',
  },
  {
    title: 'BUGS: Project Part 1',
    description:
      'Join us for a workshop where we will learn how to use a REST API to return scraped data.',
    date: new Date('April 14, 2023'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: '/images/events/bugs.jpg',
  },
  {
    title: 'Club Project: Part 2',
    description:
      'Join us to learn how to create a React frontend to display our scraped course evaluation data.',
    date: new Date('April 28, 2023'),
    startTime: '5 PM',
    endTime: '6 PM',
    location: 'WWH Room 101',
    cover: '/images/events/bugs.jpg',
  },
  {
    title: 'End of semester party!',
    description: 'Join us for an end of semester get-together!',
    date: new Date('May 5, 2023'),
    startTime: '6 PM',
    endTime: '8 PM',
    location: 'WWH Room 101',
    cover: '/images/events/bugs.jpg',
  },
  {
    title: 'Intro to BUGS and Git',
    description: 'Get an overview of BUGS, our projects, and learn about Git!',
    date: new Date('October 6, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/meet-and-greet.gif',
  },
  {
    title: 'BUGS Project Fair',
    description:
      'Hear from the project managers and get an intro to the BUGS Website, NYU CS Wiki, NYU Syllabi, and Schedge/Violet projects.',
    date: new Date('October 13, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'Online',
    cover: '/images/events/project-fair.jpg',
  },
  {
    title: 'Playwright Workshop',
    description: 'Learn about Python, Playwright and how to scrape the web!',
    date: new Date('October 20, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/scraping.jpeg',
  },
  {
    title: 'Bugtastic Coding Session #1',
    description: 'Get some snacks and contribute to BUGS open source projects!',
    date: new Date('October 27, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/coding-session.jpg',
  },
  {
    title: 'OpenSearch Talk',
    description:
      'Come to our first speaker event, featuring Daniel Doubrovkine, Principal Engineer of OpenSearch!',
    date: new Date('November 3, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/opensearch.png',
  },
  {
    title: 'Bugtastic Coding Session #2',
    description: 'Get some snacks and contribute to BUGS open source projects!',
    date: new Date('November 10, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/coding-session.jpg',
  },
  {
    title: 'React Workshop Part 1',
    description: 'Learn to use React to make a personal portfolio website!',
    date: new Date('November 17, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/web-dev.jpeg',
  },
  {
    title: 'Bugtastic Coding Session #3',
    description:
      'Get some snacks and contribute to BUGS open source projects, with a focus on the NYU CS Wiki!',
    date: new Date('December 1, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/coding-session.jpg',
  },
  {
    title: 'React Workshop Part 2',
    description: 'Continue with React and the portfolio website',
    date: new Date('December 8, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/web-dev.jpeg',
  },
  {
    title: 'End of Semester Party',
    description: 'PARTY!!!!!!!!!!!!!!!!!!!!!!!!!',
    date: new Date('December 15, 2023'),
    startTime: '5 PM',
    endTime: '6:30 PM',
    location: 'WWH Room 101',
    cover: '/images/events/feature.png',
  },
];

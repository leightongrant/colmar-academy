type Courses = {
  title: string;
  image: string;
  topics: string[];
};

const courses: Courses[] = [
  {
    title: "Software engineering",
    image: "/images/course-software.jpg",
    topics: ["Web Development", "Mobile Development", "iOT", "APIs"],
  },
  {
    title: "Computer art",
    image: "/images/course-computer-art.jpg",
    topics: [
      "Imaging & Design",
      "Web Design",
      "Motion Graphics & Visual Effects",
      "Computer Animation",
    ],
  },
  {
    title: "Design",
    image: "/images/course-design.jpg",
    topics: ["User Experience", "User Research", "Visual Design"],
  },
  {
    title: "Data",
    image: "/images/course-data.jpg",
    topics: ["Data Science", "Big Data", "SQL", "Data Visualization"],
  },
  {
    title: "Business",
    image: "/images/course-business.jpg",
    topics: ["Product Development", "Business Development", "Startup"],
  },
  {
    title: "Marketing",
    image: "/images/course-marketing.jpg",
    topics: ["Analytics", "Content Marketing", "Mobile Marketing"],
  },
];

export default courses;

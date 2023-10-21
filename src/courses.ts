import cSoftware from "/images/course-software.jpg";
import cCompArt from "/images/course-computer-art.jpg";
import cDesign from "/images/course-design.jpg";
import cData from "/images/course-data.jpg";
import cBusiness from "/images/course-business.jpg";
import cMarketing from "/images/course-marketing.jpg";

type Courses = {
  title: string;
  image: string;
  topics: string[];
};

const courses: Courses[] = [
  {
    title: "Software engineering",
    image: `${cSoftware}`,
    topics: ["Web Development", "Mobile Development", "iOT", "APIs"],
  },
  {
    title: "Computer art",
    image: `${cCompArt}`,
    topics: [
      "Imaging & Design",
      "Web Design",
      "Motion Graphics & Visual Effects",
      "Computer Animation",
    ],
  },
  {
    title: "Design",
    image: `${cDesign}`,
    topics: ["User Experience", "User Research", "Visual Design"],
  },
  {
    title: "Data",
    image: `${cData}`,
    topics: ["Data Science", "Big Data", "SQL", "Data Visualization"],
  },
  {
    title: "Business",
    image: `${cBusiness}`,
    topics: ["Product Development", "Business Development", "Startup"],
  },
  {
    title: "Marketing",
    image: `${cMarketing}`,
    topics: ["Analytics", "Content Marketing", "Mobile Marketing"],
  },
];

export default courses;

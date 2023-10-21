import courses from "../courses";

// const test = courses.map((course) => course.title);
// console.log(test);

const learning = `
    <section id='learning'>
        <h2>Start learning</h2>
        <div id='learning-content'>
            ${courses
              .map((course) => {
                return `
                <div class='courses'>
                    <img src='${course.image}' alt='${
                  course.title
                }' class='course-img'>
                    <div class='course-info'>
                        <h3>${course.title}</h3>
                        <h4>COURSES</h4>
                        <div>${course.topics
                          .map((top) => `<span>${top}, </span>`)
                          .join("")}
                        </div>
                    </div> 
                </div>               
                `;
              })
              .join("")}
        </div>
    </section>
`;
export default learning;

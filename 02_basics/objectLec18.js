const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor)
const {courseInstructor:instructor} = course
 //now we can call courseInstructor as instructor
 console.log(instructor);

  
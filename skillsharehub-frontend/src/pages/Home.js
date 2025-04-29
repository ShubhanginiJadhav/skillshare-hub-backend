import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>📚 All Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <strong>{course.title}</strong> - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

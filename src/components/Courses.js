import React from 'react';
import {CSSCourses} from '../data/courses';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><a href='/courses/html'>HTML</a></li>
        <li><a href='/courses/css'>CSS</a></li>
        <li><a href='/courses/javascript'>JavaScript</a></li>
      </ul>
      <ul>
      {CSSCourses.map(course => 
          <ol>{course.title}</ol>
      )}
      </ul>
    </div>
    
    {/* Write routes here... */}
  </div>
);

export default Courses;
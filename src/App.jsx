/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
    Link, Navigate, NavLink, Outlet, Route,
    Routes, useLocation, useNavigate, useParams
} from 'react-router-dom';
import './App.css';

const App = () => (
    <div className="App">
        <h1>react router 6</h1>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myapp" element={<Navigate replace to="/home" />} />
            <Route path="/learn" element={<Learn />}>
                <Route path="courses" element={<Courses />}>
                    <Route path=":courseId" element={<CourseId />} />
                </Route>
                <Route path="bundle" element={<Bundle />}>
                    <Route path=":bundleId" element={<BundleId />} />
                </Route>
            </Route>
            <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
    </div>
);
const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
);
const Learn = () => (
    <div>
        <h1>Learn</h1>
        <Link to="/learn/courses">Course</Link>
        {' '}
        {' '}
        |
        {' '}
        {' '}
        <Link to="/learn/bundle">Bundle</Link>
        <Outlet />
    </div>
);
const Courses = () => {
    const courseList = ['React', 'Angular', 'Vue', 'Ember', 'svelte'];
    const randomCourse = courseList[Math.floor(Math.random() * courseList.length)];
    return (
        <div>
            <h1>Course</h1>
            <p>more test</p>
            <NavLink
                style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
                to={`/learn/courses/${randomCourse}`}
            >
                {randomCourse}

            </NavLink>
            <Outlet />
        </div>
    );
};
const Bundle = () => (
    <div>
        <h1>Bundle</h1>
        <Outlet />
    </div>
);
const CourseId = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>
                CourseId:
                {courseId}
            </h1>
            <button
                onClick={() => navigate('/dashboard', { state: courseId })}
                type="button"
            >
                price
            </button>
            <Link to="/dashboard" state={courseId}>
                django
            </Link>
            {/* link state same as useNavigate and useLocation */}
        </div>
    );
};
const BundleId = () => {
    const { bundleId } = useParams();
    return (
        <div>
            <h1>
                BundleId:
                {bundleId}
            </h1>
        </div>
    );
};
const DashBoard = () => {
    const location = useLocation();
    return (
        <div>
            <h1>
                INFO I GOT HERE=
                {location.state }
            </h1>
        </div>
    );
};
export default App;

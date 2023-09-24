import express from 'express';
import {
  getCourse,
  previewAllCourses,
  previewSingleCourse,
  uploadCourse,
} from '../controllers/course.controller';
import { authorizeRoles, isAuthenticated } from '../middleware/auth';
const courseRouter = express.Router();

courseRouter.get('/courses/:id', previewSingleCourse);
courseRouter.get('/courses', previewAllCourses);

courseRouter.get('/course-content/:id', isAuthenticated, getCourse);

courseRouter.post(
  '/create-course',
  isAuthenticated,
  authorizeRoles('admin'),
  uploadCourse,
);
courseRouter.put(
  '/edit-course/:id',
  isAuthenticated,
  authorizeRoles('admin'),
  uploadCourse,
);

export default courseRouter;
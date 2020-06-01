const express = require("express");
const router = express.Router();
const url = require("url");

module.exports = (server) => {
  router.get("/courses", (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      from = query.start || 0,
      to = +query.start + +query.count,
      sort = query.sort,
      queryStr = query.query,
      courses = server.db.getState().courses;

    if (!!query.textFragment) {
      courses = courses.filter(
        (course) =>
          course.title
            .concat(course.description)
            .toUpperCase()
            .indexOf(query.textFragment.toUpperCase()) >= 0
      );
    }

    if (courses.length < to || !to) {
      to = courses.length;
    }
    courses = courses.slice(from, to);

    res.json(courses);
  });

  // Get course by ID
  router.get("/courses/:id", (req, res) => {
    const courseId = Number(req.params.id);
    let courses = server.db.getState().courses;

    const course = courses.find((course) => course.id === courseId);

    res.json(course);
  });

  // Edit course
  router.post("/courses/:id", (req, res) => {
    const courseId = Number(req.params.id);
    let courses = server.db.getState().courses;

    const courseIdx = courses.findIndex((course) => course.id === courseId);
    const updatedData = req.body.data;
    courses[courseIdx] = { ...updatedData, id: courseId };

    server.db.set("courses", courses).write();
    res.json(server.db.getState().courses);
  });

  router.delete(`/courses/:id`, (req, res) => {
    const courseId = Number(req.params.id);
    let courses = server.db.getState().courses;

    const newCourses = courses.filter((course) => course.id != courseId);

    server.db.set("courses", newCourses).write();
    res.json(server.db.getState().courses);
  });

  // Create course
  router.post("/courses", (req, res) => {
    let courses = server.db.getState().courses;
    const data = req.body.data;
    courses = [...courses, { ...data, id: new Date().valueOf() }];

    server.db.set("courses", courses).write();
    res.json(server.db.getState().courses);
  });

  return router;
};

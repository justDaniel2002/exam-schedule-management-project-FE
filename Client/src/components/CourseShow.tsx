import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Course } from "../Type/Type";
import { CourseModal } from "./CourseModal";
import { modalCOurseStyle } from "../css/modalStyle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { API } from "../API/API";

export const MyCourseShow = ({ course }: { course: Course | any }) => {
  const navigate = useNavigate();
  return (
    <div className="w-3/12 mx-10 border-4 mb-5">
      <div
        onClick={() => navigate(`/Lessions/${course.courseId}`)}
        className="border-b-4 border-black"
      >
        <img className="w-4/5 m-auto mt-5 mb-10" src={course.courseImage} />
        <div className="flex justify-end">
          <div className="text-center text-xs bg-yellow-500 w-1/4">
            {course?.levelModel !== undefined
              ? course?.levelModel?.levelName
              : "CHƯA LỰA CHỌN CẤP ĐỘ"}
          </div>
        </div>
      </div>
      <div className="text-center text-3xl font-normal py-3">
        {course?.title}
      </div>
    </div>
  );
};

export const InstructorCourseShow = ({ course, getMyCourses }: { course: Course | any, getMyCourses:any }) => {
  const navigate = useNavigate();
  return (
    <div className="w-3/12 mx-10 border-4 mb-5">
      <div
        onClick={() => navigate(`/Lessions/${course.courseId}`)}
        className="border-b-4 border-black"
      >
        <img className="w-4/5 m-auto mt-5 mb-10" src={course.courseImage} />
        <div className="flex justify-end">
          <div className="text-center text-xs bg-yellow-500 w-1/4">
            {course?.levelModel !== undefined
              ? course?.levelModel?.levelName
              : "CHƯA LỰA CHỌN CẤP ĐỘ"}
          </div>
        </div>
      </div>
      <div className="text-center text-3xl font-normal py-3 px-5 truncate">
        {course?.title}
      </div>

      <div className="text-center my-5">
        <Link
          to={`/EditCourse/${course.courseId}`}
          className="p-2 bg-green-700 text-white mt-10"
        >
          Edit Course
        </Link>
        <div>
          <button onClick={async() => {
            await API.deleteCourse(course.courseId)
            await getMyCourses()
          }} className="p-2 px-6 bg-green-700 text-white mt-10">Delete</button>
        </div>
      </div>
    </div>
  );
};

export const CourseShow = ({ course }: { course: Course | any }) => {
  const [open, setOpen] = useState(false);
  const [modalCourse, setModalCourse]: any = useState(course);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div onClick={handleOpen} className="w-3/12 mx-10 border-4">
      <div className="border-b-4 border-black">
        <img className="w-4/5 m-auto mt-5 mb-10" src={course.courseImage} />
        <div className="flex justify-end">
          <div className="text-center text-xs bg-yellow-500 w-1/4">
            {course?.levelModel !== undefined
              ? course?.levelModel?.levelName
              : "CHƯA LỰA CHỌN CẤP ĐỘ"}
          </div>
        </div>
      </div>
      <div className="text-center text-3xl font-normal py-3">
        {course?.title}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalCOurseStyle}>
          <CourseModal course={modalCourse} />
        </Box>
      </Modal>
    </div>
  );
};

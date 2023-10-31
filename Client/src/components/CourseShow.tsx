import { useNavigate } from "react-router-dom";
import { Course } from "../Type/Type";

export const MyCourseShow = ({course}:{course:Course|any}) => {

    const navigate = useNavigate()
    return (
      <div className="w-3/12 mx-10 border-4">
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
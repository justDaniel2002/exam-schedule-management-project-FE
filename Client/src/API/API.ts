import axios from "axios";

const getAllCourse = async () => {
  const res = await axios.get(`http://localhost:8088/public/course/view`);
  console.log(res);
  return res?.data;
};

const getAllPost = async () => {
  const res = await axios.get(`http://localhost:8088/public/post/viewallpost`);
  console.log(res);
  return res?.data;
};

const getPostById = async (id: string) => {
  const res = await axios.get(`http://localhost:8088/public/post/find-Post-By-id/${id}`);
  console.log(res);
  if(res?.data instanceof Array){
    return res?.data[0];
  }
  return res?.data;
};

const getTop4Course = async() => {
  const res = await axios.get(`http://localhost:8088/public/course/find-Top4-Best-Seller-Course`)
  return res?.data
}

const payment = async (data:any) => {
  const res = await axios.post(`http://localhost:8088/public/orders/payment`, data)
  return res?.data
}

const getCourseByUser = async (userid:string) => {
  const res = await axios.get(`http://localhost:8088/public/course/find-Course-Has-Order/${userid}`)
  console.log(res);
  return res?.data
}

const getLessionByCourse = async (courseid:string) => {
  const res = await axios.get(`http://localhost:8088/public/lesson/find-by-course-id/${courseid}`)
  console.log(res);
  return res?.data
}

const editUser = async (userid:number, data:any) => {
  const res = await axios.put(`http://localhost:8088/public/user/edit/${userid}`, data)
  console.log(res);
  return res?.data
}

const getUserInfo = async (userid:number) => {
  const res = await axios.get(`http://localhost:8088/public/user/infor/${userid}`)
  console.log(res);
  return res?.data
}

const getOrderHistory = async (userid:string) => {
  const res = await axios.get(`http://localhost:8088/public/user/orders/${userid}`)
  console.log(res);
  return res?.data
}

export const API = { getAllCourse, getAllPost, getPostById, getTop4Course, payment, getCourseByUser, getLessionByCourse, editUser, getUserInfo, getOrderHistory };

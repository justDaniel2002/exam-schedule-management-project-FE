import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountState, cartState } from "../atom/atom";
import { CartElement, Course } from "../Type/Type";
import RemoveIcon from "@mui/icons-material/Remove";
import { getTotalInCart, numberToVietnameseDong } from "../util/util";

const Cart = () => {
  const account: any = useRecoilValue(accountState);
  const [cart, setCart]: any = useRecoilState(cartState);
  const removeFromCart = (course: Course) => {
    const removeCourse = cart.filter(
      (c: CartElement) => c?.Course.courseId !== course.courseId
    );

    setCart(removeCourse);
  };
  console.log("cart",cart);
  return (
    <>
      <div className="bg-lime-300 pt-40 font-medium">
        <div className="w-2/3 m-auto bg-white border-2 mb-10 border-black">
          <div className="text-center mb-14">
            Giỏ hàng <ShoppingCart />
          </div>
          <div className="m-auto w-4/5 mb-20">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên Khóa Học</TableCell>
                    <TableCell align="right">Level</TableCell>
                    <TableCell align="right">Giáo Viên</TableCell>
                    <TableCell align="right">Ngày đăng ký</TableCell>
                    <TableCell align="right">Giá tiền&nbsp;($)</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((data: CartElement, index: number) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {data.Course.title}
                      </TableCell>
                      <TableCell align="right">
                        {data?.Course?.levelModel === undefined
                          ? "CHƯA LỰA CHỌN CẤP ĐỘ"
                          : data.Course.levelModel?.levelName}
                      </TableCell>
                      <TableCell align="right">{data.Course?.userModelRespone?.fullname}</TableCell>
                      <TableCell align="right">
                        {data.EnrollDate.toDateString()}
                      </TableCell>
                      <TableCell align="right">{numberToVietnameseDong(data.Course.price)}</TableCell>
                      <TableCell align="right">
                        <div onClick={() => removeFromCart(data.Course)}>
                          <RemoveIcon />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                      </TableCell>
                      <TableCell align="right">
                      </TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell align="right">
                      </TableCell>
                      <TableCell align="right">{numberToVietnameseDong(getTotalInCart(cart))}</TableCell>
                      <TableCell align="right">
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="text-center">
          {cart.length < 1 || !account ? (
            <Link to={"/"}>
              <button className="text-white bg-orange-500 py-2 px-6 mb-20">
                Đăng Kí Học
              </button>
            </Link>
          ) : (
            <Link to={"/Payment"}>
              <button className="text-white bg-orange-500 py-2 px-6 mb-20">
                Xác nhận
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

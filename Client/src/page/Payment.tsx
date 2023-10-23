import { Form, useNavigate } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useRecoilValue } from "recoil";
import { cartState } from "../atom/atom";
import { CartElement } from "../Type/Type";
import { toast } from "react-toastify";

const Payment = () => {
  const cart: CartElement[] = useRecoilValue(cartState);
  const navigate = useNavigate()

  const submitFrm = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // for (const [name, value] of formData.entries()) {
    //   if (value === null || value === "") {
    //     toast(`Form field "${name}" has a null or empty value.`, {
    //       type: toast.TYPE.WARNING,
    //     });
    //   }
    // }
    navigate("/SuccessPayment")
    
  };
  return (
    <>
      <div className="bg-lime-300 pt-40 font-medium">
        <div className="text-center text-5xl mb-14">
          Thanh Toán{" "}
          <CreditCardIcon sx={{ fontSize: "70px" }} className="opacity-70" />
        </div>
        <div className="m-auto w-2/5 mb-20">
          <Form onSubmit={(event) => submitFrm(event)} method="post">
            <div className="mb-14">
              <label className="mb-2 text-sm opacity-70 block">User name</label>
              <input
                required
                name="username"
                className="w-full p-2 rounded-lg"
                placeholder="Type here"
              />
            </div>

            <div className="mb-14">
              <label className="mb-2 text-sm opacity-70 block">Email</label>
              <input
                required
                name="email"
                className="w-full p-2 rounded-lg"
                placeholder="Type here"
              />
            </div>

            <div className="mb-14">
              <label className="mb-2 text-sm opacity-70 block">
                Phone number
              </label>
              <input
                required
                name="phone"
                className="w-full p-2 rounded-lg"
                placeholder="Type here"
              />
            </div>

            <div className="mb-14 flex">
              <div className="w-1/2">
                <label className="mb-2 text-sm opacity-70 block">
                  Phương Thức Thanh Toán
                </label>
                <select name="payMethod" className="w-11/12 p-2 rounded-lg">
                  <option>Momo</option>
                  <option>VNPay</option>
                  <option>TPBank</option>
                  <option>Visa</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="mb-2 text-sm opacity-70 block">
                  Tổng tiền
                </label>
                <input
                  name="ammount"
                  className="w-full p-2 rounded-lg"
                  readOnly
                  value={cart.reduce(
                    (accumulator: number, currentObject: CartElement) => {
                      return accumulator + currentObject.Course.price;
                    },
                    0
                  )}
                />
              </div>
            </div>
            <div className="text-center">
              <button className="text-white bg-orange-500 py-2 px-6 mb-20">
                Thanh toán
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Payment;

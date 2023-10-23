import jwt_decode from 'jwt-decode';

function numberToVietnameseDong(number:number) {
    // Check if the input is a valid number
    if (isNaN(number)) {
      return "Invalid input";
    }
  
    // Format the number as Vietnamese Dong
    const formattedNumber = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(number);
  
    return formattedNumber;
  }

 

export const decodeToken = (token:string) => {
  try {
    const decodedToken = jwt_decode(token);

    // The decoded token will be a JavaScript object containing user information
    console.log(decodedToken);
    return decodedToken
  } catch (error) {
    console.error("Error decoding token:", error);
  }
};

export {numberToVietnameseDong}
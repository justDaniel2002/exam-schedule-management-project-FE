import { authAPI } from "../../../API/authAPI";
import { decodeToken } from "../../../util/util";

export const loginAction = async ({ request }: { request: Request }) => {
    const formData : any = await request.formData();
    const data = {
        username: formData.get('account'),
        password: formData.get('password')
    }
    const result = await authAPI.loginApi(data)
    console.log(result)
    //decodeToken(result.token)
    return result

}
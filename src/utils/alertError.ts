import { AuthManager } from "@/datamanager/authManager";
import { ApiError } from "@/type/errorResponse";

const alertError = (error: any, baseMessage?: string) => {
    if (error instanceof ApiError && error.status === 401) {
        alert('로그인이 필요합니다.');
        AuthManager.getInstance().clearToken();
    }

    const errorMsg = `${baseMessage}\n`
    + (error.error ? `오류: ${error.error}\n` : '')
    + (error.message ? `메세지: ${error.message}` : '');
    
    alert(errorMsg);
}
export default alertError;
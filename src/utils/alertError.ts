
const alertError = (error: any, baseMessage?: string) => {
    const errorMsg = `${baseMessage}\n`
    + (error.error ? `오류: ${error.error}\n` : '')
    + (error.message ? `메세지: ${error.message}` : '');
    
    alert(errorMsg);
}
export default alertError;
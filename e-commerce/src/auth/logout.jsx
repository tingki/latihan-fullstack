export default function logout(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('role_id');
    sessionStorage.removeItem('email');
    window.location.href = '/';
}
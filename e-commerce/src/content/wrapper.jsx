import Nav from '../component/navbar';
import HomeContent from './home';
import Footer from '../component/footer';





function wrapper() {
    var split = window.location.href.split('/');
    const id = sessionStorage.getItem('id');
    const role_id = sessionStorage.getItem('role_id');
    const email = sessionStorage.getItem('email');

    if (id) {

    //    BUYER
        if (role_id == '2') {
            
             // HOME BUYER
            if (split[3] == 'home') {
                return (
                    <>

                        <Nav />
                        <HomeContent />
                        <Footer />
                    </>
                )
            }else{
                window.location.href = '/'
            }
        }

        // SELLER
        else 
        {
            // HOME SELLER
            if (split[3] == 'home_seller') {
                return (
                    <>

                        <Nav />
                        <Footer />
                    </>
                )
            }else{
                window.location.href = '/'
            }
        }
    } else {
        window.location.href = '/'
    }
}


export default wrapper;

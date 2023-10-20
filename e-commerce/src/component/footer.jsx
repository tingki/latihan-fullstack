import Carousel from 'react-bootstrap/Carousel';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';


export default function footer() {
    return (
        <>
            <footer className="py-3 my-4 bg-dark ">
                <div className='row'>
                    <div className='col-4 mx-auto my-auto justify-content-center align-items-center'>
                        <img src='img/logo.png' className='img-fluid' />
                    </div>
                    <div className='col-8 text-white p-4 justify-content-center' style={{ opacity: 0.8, textAlign: 'justify', fontSize: '14px' }}>
                        <LoremIpsum p={1} />
                        
                    </div>

                </div>
                <p className="text-center text-white">&copy; 2023 T-SHOP awe, Inc</p>
            </footer>
        </>
    )
}
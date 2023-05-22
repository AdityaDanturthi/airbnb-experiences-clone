import logo from './airbnb-logo.png';

export default function Navbar(){
    return(
        <div className="w-full shadow-lg">
            <img src={logo} alt='Airbnb logo' className='py-6 pl-7 '/>
        </div>
    );
}
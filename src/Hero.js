import grid from './photo-grid.png';

export default function Hero(){
    return(
        <section className="p-5 flex flex-col m-w-sm">
            <img src={grid} alt='grid'className='self-center'/>
            <div className='md:pl-24 pt-8'>
                <p className="font-bold font-poppins text-4xl md:mb-4">Online Experiences</p>
                <p className="text-xl max-w-md font-light">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    );
}
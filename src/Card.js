import swimmer from './swimmer.png';
import star from './star.png';
import weddingPhotography from './wedding-photography.png';
import mountainBike from './mountain-bike1.jpg';

let cardData =[
    {
        'mainImg': swimmer,
        'statusText': 'SOLD OUT',
        'rating': '5.0',
        'ratingCount': 6,
        'location': 'USA',
        'courseName': 'Life lessons with Katie Zaferes',
        'cost': 'From $136',
        'costPer': '/ person'
    },
    {
        'mainImg': weddingPhotography,
        'statusText': 'ONLINE',
        'rating': '5.0',
        'ratingCount': 30,
        'location': 'USA',
        'courseName': 'Learn wedding photography',
        'cost': 'From $125',
        'costPer': '/ person'
    },
    {
        'mainImg': mountainBike,
        'statusText': 'SOLD OUT',
        'rating': '4.8',
        'ratingCount': 2,
        'location': 'USA',
        'courseName': 'Group Mountain Biking',
        'cost': 'From $50',
        'costPer': '/ person'
    }
]

function Card(props){
    return(
        <div className='flex justify-center mb-4'>
        <div className='md:mt-12 font-poppins'>
            <span className='inset-auto absolute mt-1.5 ml-1.5 bg-white px-1.5 py-1 rounded'>{props.data.statusText}</span>
            <img src={props.data.mainImg} className='w-[264px] h-[353px] rounded-xl'/>
            <div className='flex flex-row gap-2 items-center mt-2 text-lg leading-none'>
                    <img src={star} />
                    <p>{props.data.rating}</p>
                    <p className='text-[#918E9B]'>({props.data.ratingCount})</p>
                    <p className='text-[#918E9B]'>&middot; {props.data.location}</p>
                </div>
            <div className='md:my-2'>
                <p className='text-lg text-[#222222] font-light'>{props.data.courseName}</p>
            </div>
            <div className='md:mb-8'>
                <p className='text-lg text-[#222222] font-light'><span className='font-bold'>{props.data.cost}</span> {props.data.costPer}</p>
            </div>
            </div>
        </div>
    );
}


export default function CardWithData(){
    return(
        <div className='sm:grid sm:grid-cols-1 md:grid md:grid-cols-3'>
            <div><Card data = {cardData[0]} /></div>
            <div><Card data = {cardData[1]} /></div>
            <div><Card data = {cardData[2]} /></div>
        </div>
    );
}

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
        'cost': 136,
        'costPer': '/ person',
        'openSpots': 0
    },
    {
        'mainImg': weddingPhotography,
        'statusText': 'ONLINE',
        'rating': '5.0',
        'ratingCount': 30,
        'location': 'USA',
        'courseName': 'Learn wedding photography',
        'cost': 125,
        'costPer': '/ person',
        'openSpots': 4
    },
    {
        'mainImg': mountainBike,
        'statusText': 'SOLD OUT',
        'rating': '4.8',
        'ratingCount': 2,
        'location': 'USA',
        'courseName': 'Group Mountain Biking',
        'cost': 50,
        'costPer': '/ person',
        'openSpots': 0
    }
]

function Card(props){
    let badgeText;
    if (props.data.openSpots === 0){
        badgeText = 'SOLD OUT';
    } else if (props.data.openSpots >0){
        badgeText = 'AVAILABLE';
    }
    return(
        <div className='flex justify-center mb-4'>
        <div className='md:mt-12 font-poppins'>
            {badgeText && <span className='inset-auto absolute mt-1.5 ml-1.5 bg-white px-1.5 py-1 rounded'>{badgeText}</span>}
            <img src={props.data.mainImg} className='w-[264px] h-[353px] rounded-xl'/>
            <div className='flex flex-row gap-2 items-center mt-2 text-lg leading-none'>
                    <img src={star}/>
                    <p>{props.data.rating}</p>
                    <p className='text-[#918E9B]'>({props.data.ratingCount})</p>
                    <p className='text-[#918E9B]'>&middot; {props.data.location}</p>
                </div>
            <div className='md:my-2'>
                <p className='text-lg text-[#222222] font-light'>{props.data.courseName}</p>
            </div>
            <div className='md:mb-8'>
                <p className='text-lg text-[#222222] font-light'><span className='font-bold'>From ${props.data.cost}</span> {props.data.costPer}</p>
            </div>
            </div>
        </div>
    );
}


export default function CardWithData(){
    const cards = cardData.map(card => <Card data = {card}/>)
    return(
        <div className='sm:grid sm:grid-cols-1 md:grid md:grid-cols-3'>
            {cards}
        </div>
    );
}

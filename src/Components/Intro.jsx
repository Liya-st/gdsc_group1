import {intro} from './intro.js'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
export default function Intro(){
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 800;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 800;
      };
return(
    <div className=' flex items-center'>
         <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
         <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
        {intro.map((item) => (
            <img
              className='w-[800px] h-[550px] inline-block p-2'
              src={item.img}
            />
          ))}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
</div>
)
}
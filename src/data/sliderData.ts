import slider1 from '../assets/image/slider-1.jpg';
import slider2 from '../assets/image/slider-2.jpg';
import slider3 from '../assets/image/slider-3.jpg';

interface ISliderData {
  imgUrl: string;
  title: string;
  description: string;
  shopUrl: string;
  productUrl: string;
}
const sliderData: ISliderData[] = [
  {
    imgUrl: slider1,
    title: ' Affordable iPhones, iPad, Mac and more',
    description:
      'Buy or make a request from the our store loaded with Over 500K affordable iPHONES, iPad, Mac available at a giveaway price.',
    shopUrl: '#',
    productUrl: '#',
  },
  {
    imgUrl: slider2,
    title: 'Buy or make a request for a new gadget NOW!!!',
    description:
      'Stop searching and surfing everywhere and take advantage of our REQUEST BUTTON for any gadget at all. ',
    shopUrl: '#',
    productUrl: '#',
  },
  {
    imgUrl: slider3,
    title: ' The  Unboxing feeling is magical. ',
    description:
      'New Gadget deals is always available, make orders for your new gadget to get the unboxing feeling.',
    shopUrl: '#',
    productUrl: '#',
  },
];

export default sliderData;

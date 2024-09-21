import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import heart icon from react-icons/fa
import { MdCamera } from 'react-icons/md'; // Import camera icon from react-icons/md
import { FaTree } from 'react-icons/fa'; // Import tree icon from react-icons/fa
import { BiWorld } from 'react-icons/bi'; // Import world icon from react-icons/bi
import { FaVideo } from 'react-icons/fa';

export const categories = [
  {
    label: "All",
    path: "/",
    icon: <BiWorld />,
  },
  {
    img: "assets/marraige1.jpg",
    label: "Marriage",
    path: "/marriage",
    icon: <FaHeart />, // Use heart icon for Marriage
    description: "This property is close to the beach!",
  },
  {
    img: "assets/birth1.jpeg",
    label: "Birthday",
    path: "/birthday",
   // icon: <GiCakeSlice />, // Use cake icon for Birthday
    description: "This property has windmills!",
  },
  {
    img: "assets/photo1.jpeg",
    label: "PhotoShoots",
    path: "/photo-shoots",
    icon: <MdCamera />, // Use camera icon for PhotoShoots
    description: "This property is modern!",
  },
  {
    img: "assets/anni1.jpeg",
    label: "Anniversary",
    path: "/anniversary",
    icon: <FaTree />, // Use tree icon for Anniversary
    description: "This property is in the countryside!",
  },
  {
    img: "assets/gift1.jpg",
    label: "CustomisedGifts",
    path: "/CustomisedGifts",
    //icon: <GiGiftOfAll />, // Use gift icon for CustomisedGifts
    description: "This property has a beautiful pool!",
  }, 
  {
    img: "assets/beach_cat.jpg",
    label: "OccasionVideos",
    path: "/OccasionVideos",
    icon: <FaVideo />, // Use video icon for Occasionvideos
    description: "This property is on an island!",
  },
];

import React from 'react';
import Image from 'react-bootstrap/Image';
import headerImg from '../../resours/img/headerImg.jpg';

export default function ImgHeader():JSX.Element {
  return (
     <Image style={{ width: '100%' }} src={headerImg}  />
  )
}

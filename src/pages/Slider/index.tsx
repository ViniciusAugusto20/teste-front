import React, { useState } from 'react';
import { Slide } from '../../components';
import * as S from './styles';
import SliderMock from '../../assets/mock/db.json';
import { SlideModels } from '../../models/slideModels';
const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((current + 1) % SliderMock.sliders.length)
  };
  return (
    <S.SliderWrapper>
      {SliderMock.sliders.map((slide: SlideModels, index) => {
        return (
          <S.SliderContainer key={index}>
            {index === current && (
              <Slide
                key={slide.id}
                bodyFirst={slide.bodyFirst}
                bodySecond={slide.bodySecond}
                id={slide.id}
                img={slide.img}
                title={slide.title}
                subTitle={slide.subTitle}
                typeOfSlide={slide.typeOfSlide}
                handleChangeSlide={()=>nextSlide()}
              />
            )}
          </S.SliderContainer >
        );
      })}
    </S.SliderWrapper>
  );
};

export default Slider;

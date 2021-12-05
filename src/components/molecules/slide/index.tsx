import React from 'react';
import { SlideModels } from '../../../models/slideModels';
import * as S from './styles';

const Slide: React.FC<SlideModels> = (slide: SlideModels) => (
  <S.Container
    typeOfSlide={slide.typeOfSlide}
    key={slide.id}
    slideImg={slide.img}
  >
    <S.ImgWrapper>
      <img src={slide.img} />
    </S.ImgWrapper>
    <S.TextWrapper>
      <h1>{slide.title}</h1>
      <p>{slide.subTitle}</p>
      <span>{slide.bodyFirst}</span>
      <span>{slide.bodySecond}</span>
    </S.TextWrapper>
    <S.ButtonContainer>
      <button id="qa-next-slide-button" onClick={slide.handleChangeSlide}>Próximo</button>
    </S.ButtonContainer>
  </S.Container>
);

export default Slide;

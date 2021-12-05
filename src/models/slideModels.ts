export type SlideModels = {
  id: number;
  title: string;
  img: string;
  typeOfSlide: string;
  subTitle?: string;
  bodyFirst?: string;
  bodySecond?: string;
  handleChangeSlide?: ()=>void;
};

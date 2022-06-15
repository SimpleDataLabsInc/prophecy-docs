import React, { useState } from "react";

const StyledSlider = ({children}) => (
<div style={{
'position': 'relative',
  'display': 'flex',
  'justify-content': 'center',
  'align-items': 'center'}}>{children}</div>
)

const SlideImage = ({source,children}) => (
<img src={source} style={{
  'object-fit': 'cover'
  }}/>
)



const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (

    <StyledSlider>
    <i class="fa fa-chevron-left" onClick={prevSlide} style={{'position': 'absolute','top': '50%','left': '0px','font-size': '2rem'}}></i>
    <i class="fa fa-chevron-right" onClick={nextSlide} style={{'position': 'absolute','top': '50%','right': '0px','font-size': '2rem'}}></i>

      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
            <div style={{ padding: '30px'}}>
              <SlideImage source={slide.image}></SlideImage>
              {slide.description}</div>
            )}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default function App({ ImageData }){
  return <Slider slides={ImageData} style={{'font-family':' sans-serif',
                                              'text-align': 'center'}}/>;
}
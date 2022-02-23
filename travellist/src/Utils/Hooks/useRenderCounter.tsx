import {useRef} from 'react';

export const useRenderCounter = () => {
  let renders = useRef(0);
  console.log('renders:', renders.current++);
};

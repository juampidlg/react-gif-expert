

import { render, screen } from '@testing-library/react'
import {GifItem} from '../../src/components/GifItem'





describe('Pruebas en <GifItem/>', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    test('Debe hacer match con el snapshot', () => { 
        const { container }=render( <GifItem title={ title}  url={url}/>);
        expect( container).toMatchSnapshot();
     })

     test('Debe mostrar la imagen y el URL con el alt indicado', () => { 
        render( <GifItem title={ title}  url={url}/>);
        //screen.debug();
        //expect( screen.getByRole('img').src).toBe( url);
        //expect( screen.getByRole('img').alt).toBe( title);
        const {src,alt}= screen.getByRole('img');
        expect( src).toBe(url);
        expect( alt).toBe(title);
      })

      test('debe mostrar el titulo en mi componente', () => { 
        render( <GifItem title={ title}  url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
       })
 })
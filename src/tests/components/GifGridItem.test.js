import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

  const title = 'Un título';
  const url   = 'http://localhost:8080';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe mostrar corectamente el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe de obtener el src y el alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('Debe tener la clase animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  });
  
});

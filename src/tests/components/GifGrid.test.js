import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('Debe mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar ítems cuando se cargan las imágenes con useFecthGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'http://localhost:8080/cualquier/cosa.jpg',
        title: 'Hi React!',
      },
      {
        id: 'DEF',
        url: 'http://localhost:8080/cualquier/cosa-dos.jpg',
        title: 'Hi React again!',
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  });
});

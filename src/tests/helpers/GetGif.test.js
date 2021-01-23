import { getGif } from '../../helpers/GetGif';

describe('Pruebas con GetGif fetch', () => {

  test('Debe traer 20 elementos', async () => {
    const gifs = await getGif('One Punch');
    expect( gifs.length ).toBe(20);
  });

  test('Debe enviar category', async () => {
    const gifs = await getGif('');
    expect(gifs.length).toBe(0);
  });

});

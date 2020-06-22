import Buffer from 'facade/buffer';

const map = M.map({
  container: 'mapjs',
});

// eslint-disable-next-line no-buffer-constructor
const mp = new Buffer({
  position: 'BR',
});

map.addPlugin(mp);

export default (state) => {
  const { productsList: { list } } = state;

  return list.map(({
    id, name, vendor, media,
  }) => {
    const video = media.find(({ type }) => type === 'video');
    const poster = media.find(({ type }) => type === 'image');
    return {
      id, name, vendor, video, poster,
    };
  });
};

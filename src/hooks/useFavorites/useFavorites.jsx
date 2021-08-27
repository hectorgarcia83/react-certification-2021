const FAVORITES_KEY = 'FAVORITES';

export default function useFavorites() {
  const add = (video) => {
    const currentList = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    let newList = [];
    if (!currentList) {
      newList.push(video);
    } else {
      newList = [...currentList, video];
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newList));
  };

  const remove = (id) => {
    const list = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    const position = list.findIndex((item) => item.id === id);
    list.splice(position, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
  };

  const exist = (id) => {
    const list = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    if (list) {
      const position = list.findIndex((item) => item.id === id);
      return position >= 0;
    }
    return false;
  };

  const list = () => {
    const videos = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    return videos;
  };

  const getVideo = (id) => {
    const videos = JSON.parse(localStorage.getItem(FAVORITES_KEY));
    const video = videos.find((item) => item.id === id);
    return video;
  };

  return { add, remove, exist, list, getVideo };
}

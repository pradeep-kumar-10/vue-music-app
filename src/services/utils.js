const formatTimer = seconds => {
  let minutes = parseInt(seconds / 60).toString();
  seconds = parseInt(seconds % 60).toString();

  let output = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  output += seconds >= 10 ? `:${seconds}` : `:0${seconds}`;

  return output;
};

const deleteElement = (array, target) => {
  return array.filter(item => {
    return item != target;
  });
};

const threatSongs = songs => {
  return songs.map(song => {
    song["isPlaying"] = false;
    song["percent"] = 0;
    song["currentlyTimer"] = "00:00";
    song["totalTimer"] = formatTimer(song.seconds);

    return song;
  });
};
export { deleteElement, formatTimer, threatSongs}; 

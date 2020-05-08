document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function () {
    const key = button.innerHTML;

    
    const audioFileName = findFilePath(key);
    const audio = new Audio(audioFileName)
    audio.play();
  })
})

// For each key, find its consecutive file name of the sound
function findFilePath (key) {
  let filePath = "sounds/"
  if (key === 'w') {
    filePath += "tom-1.mp3"
  } else if (key === 'a') {
    filePath += "tom-2.mp3"
  } else if (key === 's') {
    filePath += "tom-3.mp3"
  } else if (key === 'd') {
    filePath += "tom-4.mp3"
  } else if (key === 'j') {
    filePath += "snare.mp3"
  } else if (key === 'k') {
    filePath += "crash.mp3"
  } else if (key === 'l') {
    filePath += "kick-bass.mp3"
  }
  return filePath;
}
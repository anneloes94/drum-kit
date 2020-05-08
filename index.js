document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function () {
    const key = button.innerHTML;
    const audioFileName = findFilePath(key);
    if (audioFileName) {
      const audio = new Audio(audioFileName)
      audio.play();
    } else {
      console.log("Cannot play your audio.")
    }
  })
})

// For each key, find its consecutive file name of the sound
function findFilePath (key) {
  let filePath = "sounds/"
  switch (key) {
    case "w":
      filePath += "tom-1.mp3"
      break;
    case "a":
      filePath += "tom-2.mp3"
      break;
    case "s":
      filePath += "tom-3.mp3"
      break
    case "d":
      filePath += "tom-4.mp3"
      break;
    case "j":
      filePath += "snare.mp3"
      break;
    case "k":
      filePath += "crash.mp3"
      break;
    case "l":
      filePath += "kick-bass.mp3"
      break;

    default: filePath = null;
  }
  return filePath;
}
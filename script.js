const paragraph = "hello, I hope you have a great day, im sorry if I'm not messaging you a lot im just busy learning this HAHA I've been missing you a lot so i hope we're still okay i wish you have a great health and do your best you can do it!";
let i = 0;

function typeParagraph() {
  if (i < paragraph.length) {
    document.getElementById("long-message").innerHTML += paragraph.charAt(i);
    i++;
    setTimeout(typeParagraph, 100); // Speed between letters
  }
}

// Listen for the click event on the play button
document.getElementById("play-btn").addEventListener("click", function() {
  // Clear any existing text just in case they click it again
  document.getElementById("long-message").innerHTML = "";
  i = 0;
  
  // Wait for 3 seconds (3000 milliseconds) before starting the typing effect
  setTimeout(typeParagraph, 200);
});
// Get the button and audio elements from HTML
const playBtn = document.getElementById('play-btn');
const bgMusic = document.getElementById('bg-music');

// Add click listener to start music playback
playBtn.addEventListener('click', () => {
    // Check if the music is currently paused
        if (bgMusic.paused) {
                bgMusic.play();
                        playBtn.textContent = 'Pause'; // Change button label when playing
                            } else {
                                    bgMusic.pause();
                                            playBtn.textContent = 'Play';  // Change button label when paused
                                                }
                                                });
                                                
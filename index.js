
const snapshotDisplay = document.querySelector('.snapshot-display');
const youtubeURLs = {
  'Horizontal Parallax': '7FVoKpY9_fQ',
  'clickFinder': '_wiFBmwsN28',
  'Intersection Observer': 'orP9zwnE6PA'
}

snapshotDisplay.addEventListener('click', (e) => {
  const iFrame = document.querySelector('.video-display iframe');
  iFrame.src = 'https://www.youtube.com/embed/' + youtubeURLs[e.target.innerText];
})

// Contact Form Reset

function resetContactForm() {
  document.querySelector('#user_email').value = 'your@email.here';
  document.querySelector('#user_message').value = 'Your message has been sent.'
}

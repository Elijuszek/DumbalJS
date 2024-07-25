function initTitleScreen() {
    const titleScreen = document.createElement('div');
    titleScreen.id = 'menu';
    titleScreen.classList.add('scene', 'active');
    
    const titleHeading = document.createElement('h1');
    titleHeading.textContent = 'Dumbal';
    titleScreen.appendChild(titleHeading);

    const playButton = document.createElement('button');
    playButton.id = 'play-button';
    playButton.textContent = 'Play Game';
    titleScreen.appendChild(playButton);
    
    document.body.appendChild(titleScreen);

    playButton.addEventListener('click', function() {
        titleScreen.classList.remove('active');
        titleScreen.style.display = 'none';
        document.getElementById('game').classList.add('active');
        document.getElementById('game').style.display = 'block';
    });
}

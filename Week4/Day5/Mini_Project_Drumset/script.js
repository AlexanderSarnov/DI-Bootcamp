// Object to keep track of active clones for each key
const activeClones = {};

// Function to play sound and add playing class
function playSound(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    const drum = document.querySelector(`div[data-key="${key}"]`);
    if (!audio) return;

    // Initialize the clone count for the key if not already done
    if (!activeClones[key]) {
        activeClones[key] = 0;
    }

    // Check if the clone count is less than 100
    if (activeClones[key] < 100) {
        activeClones[key]++;
        const clone = audio.cloneNode();
        clone.currentTime = 0; // Rewind to the start
        clone.play();
        drum.classList.add('playing');

        // Remove playing class and decrease clone count when sound ends
        clone.addEventListener('ended', () => {
            drum.classList.remove('playing');
            activeClones[key]--;
        });
    } else {
        // Wait until a clone slot is available
        const interval = setInterval(() => {
            if (activeClones[key] < 100) {
                clearInterval(interval);
                playSound(key);
            }
        }, 10); // Check every 10ms
    }
}

// Event listener for keydown
document.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase().charCodeAt(0);
    playSound(key);
});

// Event listener for keyup
document.addEventListener('keyup', function (event) {
    const key = event.key.toUpperCase().charCodeAt(0);
    const drum = document.querySelector(`div[data-key="${key}"]`);
    if (drum) {
        drum.classList.remove('playing');
    }
});

// Event listener for click
document.querySelectorAll('.drum').forEach((drum) => {
    drum.addEventListener('click', function () {
        const key = this.getAttribute('data-key');
        playSound(key);
    });
});

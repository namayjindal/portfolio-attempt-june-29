// VSCO Embed
function loadVSCOEmbed() {
    // Replace this with your actual VSCO embed code
    document.getElementById('vsco-embed').innerHTML = '<iframe src="https://vsco.co/embed/collection/1" style="width: 100%; height: 600px;" frameborder="0"></iframe>';
}

// Spotify Embed
function loadSpotifyEmbed() {
    // You'll need to regularly update this with your current top track
    const spotifyTrackId = '12BaQt9aYdTlEtKreqB5V4'; // Example track ID
    const embedCode = `<iframe src="https://open.spotify.com/embed/track/${spotifyTrackId}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;
    document.getElementById('spotify-embed').innerHTML = embedCode;
}

// Call these functions when the page loads
window.onload = function() {
    // loadVSCOEmbed();
    loadSpotifyEmbed();
};
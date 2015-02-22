function vidPlay() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'Dy28eq2PjcM',
        });
    }
}
function vidClicked() {
    window.location.replace("vid.html");
}

function genfitClicked() {
    window.location.replace("genfit.html");
}

function yourwrkoutClicked() {
    window.location.replace("yourworkout.html");
}

function tipsClicked() {
    window.location.replace("tips.html");
}
function returnHome()
{
    window.location.replace("index.html");
}
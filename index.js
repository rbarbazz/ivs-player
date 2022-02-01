const DEFAULT_URL =
  'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8'
let player

if (IVSPlayer.isPlayerSupported) {
  player = IVSPlayer.create()
  player.attachHTMLVideoElement(document.getElementById('video-player'))

  player.load(DEFAULT_URL)
  player.play()
}

function onBtnClick(elem) {
  if (!player) {
    return
  }

  const val = document.getElementById('feed-url').value

  if (val !== '') {
    player.load(val)
    player.play()
  }
}

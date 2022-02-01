if (IVSPlayer.isPlayerSupported) {
  const player = IVSPlayer.create()

  player.attachHTMLVideoElement(document.getElementById('video-player'))
  player.load(
    'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8',
  )
  player.play()
}

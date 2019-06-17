$('#marquee').marquee()
$.fn.anyClick = function() {
  $(this).on('click', function() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    $(this).css('background', `RGB(${r}, ${g}, ${b})`)
  })
}

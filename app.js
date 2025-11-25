$(function() {
  // YOUR CODE HERE
  $('#toggleButton').on('click', function() {
    $(this).next('#myParagraph').slideToggle()
  })

  $('#colorButton').on('click', function() {
    $('#colorDiv').css({ backgroundColor: "yellow"})
  })

  $('#addClassButton').on('click', function() {
    $('#classDiv').addClass('new-class')
    console.log("Added the new CSS class to the gray div")
  })

  $('#removeClassButton').on('click', function() {
    $('#classDiv').removeClass()
    console.log("Removed the CSS class from the gray div")
  })

  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn( "slow", function() {})
  })

  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut( "slow", function() {})
  })

  $('#slideUpButton').on('click', function() {
    $('#slideDiv').slideUp( "slow", function() {})
  })

  $('#slideDownButton').on('click', function() {
    $('#slideDiv').slideDown( "slow", function() {})
  })
})
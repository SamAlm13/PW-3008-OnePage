$(document).ready(function(){
  $('#btn-menu').click(function(e){
    e.preventDefault()
    $('#menu').toggle('slow')
  })

  $('a').click(function(e){
    e.preventDefault()

    let url = $(this).attr('href')
    
    switch(url){
      case "home":
    $('#home').show()
    $('#about').hide()
    $('#action').hide()
    $('#contact').hide()
      break;
      case "about":
    $('#about').show()
    $('#home').hide()
    $('#action').hide()
    $('#contact').hide()
      break;
      case "action":
    $('#action').show()
    $('#about').hide()
    $('#home').hide()
    $('#contact').hide()
      break;
      case "contact":
    $('#contact').show()
    $('#about').hide()
    $('#action').hide()
    $('#home').hide()
      break;
      default:
      alert('Link Invalido')
      break;
    }
  })
})
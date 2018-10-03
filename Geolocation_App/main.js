// Juan Aguirre


var x=document.getElementById("myMap");
function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="Geolocation is not supported by this browser.";}
  }
function showPosition(position)
  {
    x.innerHTML="<div class='hold_it'><div class='holder'><iframe width='425' height='350' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q="+ position.coords.latitude+"+"+position.coords.longitude+"&amp;aq=&amp;sll="+ position.coords.latitude+","+position.coords.longitude+"&amp;t=h&amp;ie=UTF8&amp;ll="+position.coords.latitude+","+position.coords.longitude+"&amp;z=14&amp;iwloc=A&amp;output=embed'></iframe></div></div><br /><span class='text'><span class='lo'>Latitude: " + position.coords.latitude + 
      "</span> | <span class='la'>Longitude: " + position.coords.longitude+"</span></span>";
  }

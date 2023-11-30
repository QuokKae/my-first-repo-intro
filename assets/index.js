$(document).ready(function(){
  // Set Variables
    var foodIcon = $("#logo");
    var quarterlyMenu = $(".menu");
    var menuSelect = $(".selection");
    var mathsFaves = $(".math");
    var location = $(".local");
    var hours = $(".hours");
    var mathGallery = $(".gallery");
      
  // Sets initial opacity to 0 for all elements
      foodIcon.css({ opacity: 0 });
      quarterlyMenu.css({ opacity: 0 });
      mathsFaves.css({ opacity: 0 });
      location.css({ opacity: 0 });
      hours.css({ opacity: 0 });
      mathGallery.css({ opacity: 0 });
      
  // Sets a mouse over effect for each variable
      foodIcon.mouseover(function(){
        $(this).fadeIn(300);
        $(this).animate({opacity:1});
      });
      
      quarterlyMenu.mouseover(function(){
        $(this).fadeIn(300).delay(300);
        $(this).animate({opacity: 1});
      });
    
      mathsFaves.mouseover(function(){
        $(this).fadeIn(300).delay(300);
        $(this).animate({opacity: 1});
      });
      
      mathGallery.mouseover(function(){
        $(this).fadeIn(300).delay(300);
        $(this).animate({opacity: 1});
      });
      
      location.mouseover(function(){
        $(this).fadeIn(300).delay(300);
        $(this).animate({opacity: 1});
      });
      
      hours.mouseover(function(){
        $(this).fadeIn(300).delay(300);
        $(this).animate({opacity: 1});
      });
      
    });
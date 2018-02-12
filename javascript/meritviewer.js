$(document).ready(function()
  {
  var currentEmpire=null;

  $("#EmpireButtonList li").fadeTo(750, 0.25);

  $("#EmpireButtonList li").hover(
    function()
      {
      if(!$(this).hasClass("SelectedEmpire"))
        {$(this).stop().fadeTo(250, 0.50);}
      },
    function()
      {
      if (!$(this).hasClass("SelectedEmpire"))
        {$(this).stop().fadeTo(500, 0.25);}
      }
    );

  $("#EmpireButtonList li").click(
    function()
    {
    var clicked = $(this);
    var previous = $("#EmpireButtonList li.SelectedEmpire");

    if($(this).hasClass("SelectedEmpire")) {return;}

      if(clicked !== previous)
        {previous.removeClass("SelectedEmpire");}

      clicked.addClass("SelectedEmpire").fadeTo(250, 1.0);
      previous.stop().fadeTo(500, 0.25);
      }
    );
  });


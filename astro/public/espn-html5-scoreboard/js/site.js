$(function() {

var mlb = 'mlb.json';

var $ul = $('<ul>');
$ul.appendTo('#scoreboard');

$.getJSON(mlb, function(data) {
    
    var games = data.sports[0].leagues[0].events;
    // console.log(games);
    
    $.each(games, function(i, v) {
      var home  = v.competitions[0].competitors[0].team.name,
          away  = v.competitions[0].competitors[1].team.name,
          homeRecord  = v.competitions[0].competitors[0].team.record.summary,
          awayRecord  = v.competitions[0].competitors[1].team.record.summary,
          venue  = v.venues[0].name,
          venueImage  = v.venues[0].images.day.medium.href,
          statusDesc  = v.competitions[0].status.description,
          homeColor = v.competitions[0].competitors[0].team.color,
          awayColor = v.competitions[0].competitors[1].team.color,
          recapLink = v.links.web.conversation.href,


          homeStartingPitcher_firstName = v.competitions[0].stats.homeStartingPitcher.athlete.firstName,
          homeStartingPitcher_lastName = v.competitions[0].stats.homeStartingPitcher.athlete.lastName,

          awayStartingPitcher_firstName = v.competitions[0].stats.awayStartingPitcher.athlete.firstName,
          awayStartingPitcher_lastName = v.competitions[0].stats.awayStartingPitcher.athlete.lastName,

          savingPitcher_firstName = games[0].competitions[0].stats.savingPitcher.athlete.firstName,
          savingPitcher_lastName = games[0].competitions[0].stats.savingPitcher.athlete.lastName,

          homeScore = v.competitions[0].competitors[0].score,
          awayScore = v.competitions[0].competitors[1].score;

      var $li = $('<li>');
      $li.appendTo($ul);

      $('<h2>' + statusDesc + '</h2>').appendTo($li);
      $('<div class="team_grp "><div class="record_grp"><a target="_blank" href="' + recapLink + '">' + away + '</a><span class="team_record">(' +  awayRecord  + ')</span></div><div class="away_Score">' + awayScore + '</div></div>' + '<div class="team_grp"><div class="record_grp"><a target="_blank" href="' + recapLink + '">'+ home + '</a><span class="team_record">(' + homeRecord + ')</span></div><div class="home_Score">' + homeScore + '</div></div>').appendTo($li);
      $('<div class="pitchers"><span>' + '<strong style="color: #' + homeColor + ' ">H:</strong> ' + homeStartingPitcher_firstName + ' ' + homeStartingPitcher_lastName + '</span>, <span>' + '<strong style="color: #' + awayColor + ' ">A:</strong> ' + awayStartingPitcher_firstName + ' ' + awayStartingPitcher_lastName + '</span></div>').appendTo($li);
      $().appendTo($li);
      $li.wrapInner('<div></div>');

    });
  });

// Pushdown XL Ad Unit Show/Hide

$("#espnAdsPencil").click(function(e){
    $(this).removeClass("show");
    $(this).addClass("hide");
    $("#espnAdsExtend").addClass("show");
    e.preventDefault();
});


$("#espnAdsExtend").click(function(e){
  $(this).removeClass("show");
  $(this).addClass("hide");
  $("#espnAdsPencil").addClass("show");
  e.preventDefault();
});

});
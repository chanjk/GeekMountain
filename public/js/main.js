
var displayScores = function() {
  $.ajax({
    url: '/api/teams'
  }).done(function(teams) {
    drawChart(teams);
  });
};

var displayTweets = function() {
  $.ajax({
    url: '/api/tweets'
  }).done(function(tweets) {
    $('#tweet-list').empty();

    tweets.forEach(function(tweet) {
      $('#tweet-list').append($('<div>').text(tweet.text));

      if (tweet.entities.media && tweet.entities.media[0].media_url) {
        $('#tweet-list').append($('<img>').attr('src', tweet.entities.media[0].media_url));
      }
    });
  });
};

displayScores();
// displayTweets();

setInterval(displayScores, 5000);
<<<<<<< HEAD
setInterval(displayTweets, 5000);
=======
// setInterval(displayTweets, 5000);
var $scrollingDiv = $(".soc_media");
>>>>>>> WorkingBranch

$(window).scroll(function(){
       $scrollingDiv
              .stop()
              .animate({"marginTop": ($(window).scrollTop() + 30) + "px"}, "slow" );
});

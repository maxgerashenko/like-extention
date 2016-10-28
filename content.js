//var heart = Like();
//
//function Like(){
//    var likes = $( "._soakw.coreSpriteHeartOpen");
//
//    console.log('likes',likes.length);
//    console.log('likes',likes);
//
//
//    return likes.css('border', 'red solid 3px');
//};
//
//debouncedLike = _.debounce(Like, 300);
//
//$(window).scroll(debouncedLike);

var likes={}


likes[0].css('border','red solid 3px');
//for (var i = 0; i <= likes.length; i++) {
//    var timeout = _.random(2000, 5000) * i;
//    setTimeout(function(i) { return function() { likes[i].css('border', 'red solid 3px');  }; }(i, likes), timeout );
//}
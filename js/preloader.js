window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');

    var video = document.getElementById('preloader-video');
    video.addEventListener('canplaythrough', function() {
      preloader.style.display = 'none';
      content.style.display = 'block';
    });
  });

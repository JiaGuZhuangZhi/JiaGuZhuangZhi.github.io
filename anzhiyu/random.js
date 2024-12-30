var posts=["2024/08/08/24080801/","2024/09/23/24092301/","2024/12/26/24122601/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
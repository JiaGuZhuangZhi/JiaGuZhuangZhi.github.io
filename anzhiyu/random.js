var posts=["2024/09/23/24092301/","2024/08/08/24080801/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
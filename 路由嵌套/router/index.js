import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Sort from "@/views/Sort";
import News from "@/views/News";
import Music from "@/views/Seconds/Music";
import Photo from "@/views/Seconds/Photo";
import Video from "@/views/Seconds/Video";
import Metal from "@/views/Seconds/Sort/Metal";
import Rock from "@/views/Seconds/Sort/Rock";

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/sort',
      component: Sort,
      children: [
        {
          path: 'music',
          component: Music,
          children: [
            {
              path: 'metal',
              component: Metal,
            },
            {
              path: 'rock',
              component: Rock,
            }
          ]
        },
        {
          path: 'photo',
          component: Photo
        },
        {
          path: 'video',
          component: Video
        },
      ]
    }
  ]
})


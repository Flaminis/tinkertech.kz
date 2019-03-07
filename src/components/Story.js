import React from "react"
import Swiper from "react-id-swiper"

const Story = ({ slides, delay }) => {
  const params = {
    containerClass: "stories swiper-container",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      renderBullet: function(index, className) {
        return `<div class="${className}" style="animation-duration: ${delay}ms"></div>`
      },
    },
  }
  if (delay) {
    params.autoplay = {
      delay,
    }
  }
  return <Swiper {...params}>{slides}</Swiper>
}

export default Story

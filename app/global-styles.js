import { injectGlobal, keyframes } from 'styled-components';

const twinkletwinkle = keyframes`
  from {
    background-position: 0 0
  }
  to {
    background-position: -10000px 5000px
  }
`;

const float = keyframes`
  50% {
     transform: translate(0, 10px)
  }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal `
  html,
  body {
    height: 100%;
    width: 100%;
    background: black;
  }

  body{
    font-family: 'Saira', sans-serif !important;
  }

  img {
    max-width: 100%;
  }

  .pager {
    margin: 0px !important;
    font-size: 24px !important;
    line-height: 24px;
    font-weight: bold;

    li{
      list-style-type: none;
      display: inline-block;
      transform: scale(1) rotate(19deg) translateX(0px) translateY(0px) skewX(-10deg) skewY(-20deg);
      &:hover{
        background-color: #fa4248;
        a{
          color: #fff !important;
        }
      }
      a{
        padding: 1.1em 1.6em;
        display: inline-block;
        text-decoration: none !important;
        color: #fff !important;
        transform: scale(1) rotate(0deg) translateX(0px) translateY(0px) skewX(20deg) skewY(0deg);
      }
      &.active{
        background-color: #fa4248;
        color: #fff !important;
      }
    }
  }

  .stars {
    background: #14121b url(https://githubuniverse.com/assets/img/universe/stars.png) repeat top center;
    z-index: 0;
  }

  .twinkling {
    background: transparent url(https://githubuniverse.com/assets/img/universe/twinkle.png) repeat top center;
    z-index: 1;
    -moz-animation: ${twinkletwinkle} 400s linear infinite;
    -ms-animation: ${twinkletwinkle} 400s linear infinite;
    -o-animation: ${twinkletwinkle} 400s linear infinite;
    -webkit-animation: ${twinkletwinkle} 400s linear infinite;
    animation: ${twinkletwinkle} 400s linear infinite;
  }

  .float-animation {
    animation-name: ${float};
    animation-duration: 5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .stars, .twinkling {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

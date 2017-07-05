import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal `
  html,
  body {
    height: 100%;
    width: 100%;
    background: black;
  }


  .pager{
    margin: 0px !important;
    font-size: 24px !important;
    line-height: 24px;
    font-weight: bold;
    ${'' /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */}

    li:not(:last-child){
      ${'' /* border-right: 1px solid #d7dadb; */}
      &:hover{
		    ${'' /* border-right: 1px solid #fff; */}
      }
    }

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
`;

import React from 'react';
import { CanvasField } from "../Canvas/CanvasStyled";

const CHINESE = '\u03E1\u03EF\u03BE\u0466\u0489\u058D\u05F0\u05E4\u05DC\u05D9\u05DE\u0574\u0556\u0569\u057B\u0648\u0643\u0626\u06AA\u06B0\u0636\u072E\u0A88\u0F3D\u1028\u10A7\u10ED\u10E5\u10DA\u10E2\u10FB\u104C\u1023\u104F\u1185\u129B\u12F7\u12F9\u1307\u16B5\u16D7\u16EA\u16CB\u18DB\u20B0\u20BF\u20B4\u2623\u2873\u28F3\u2A0A\u2A0F\u2C8A\u2C21\u2C56\u2D63\u2EE8\u2EC1\u2FA6\u2F4A\u2F57\u2F63\u3077\u304A\u30DB\u30D9\u34C8\u3431\u3409\u4E08\u4495\u9FC8\uA50D\uA56B\uA5E7\uA5FA\uA598\uA551\uA51B';
const chineseArr = CHINESE.split('');
const font_size = 10;
// let columns = this.windowInnerWidth/font_size;
const drops = [];
// for(let x = 0; x < columns; x++) drops[x] = 1;


/*function draw(ctx) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, this.windowInnerWidth, this.windowInnerHeight);

  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px courier new";
  for(let i = 0; i < drops.length; i++) {
    const text = chineseArr[Math.floor(Math.random()*chineseArr.length)];
    ctx.fillText(text, i*font_size, drops[i]*font_size);

    if(drops[i]*font_size > this.windowInnerHeight && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}*/

// window.onresize = function(event) {
//   windowInnerWidth =  window.innerWidth;
//   windowInnerHeight =  window.innerHeight;
//   columns = windowInnerWidth/font_size;
//   for(let x = 0; x < columns; x++)
//     drops[x] = 1;
//   console.log(columns)
// };

class Canvas extends React.Component {
  state = {
    windowInnerWidth: window.innerWidth,
    windowInnerHeight:  window.innerHeight,
    columns: window.innerWidth/font_size
  };
  canvasRef = React.createRef();

  draw = (ctx) => {
    // ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillStyle = this.props.flag ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, this.state.windowInnerWidth, this.state.windowInnerHeight);

    // ctx.fillStyle = "#0F0";
    ctx.fillStyle = this.props.flag ? 'brown' : '#0F0';
    ctx.font = font_size + "px courier new";
    for(let i = 0; i < drops.length; i++) {
      const text = chineseArr[Math.floor(Math.random()*chineseArr.length)];
      ctx.fillText(text, i*font_size, drops[i]*font_size);

      if(drops[i]*font_size > this.state.windowInnerHeight && Math.random() > 0.975)
        drops[i] = 0;
      drops[i]++;
    }
  };

  onChangeColumns = () => {
    this.setState({
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
      columns: window.innerWidth/font_size
    });
    for(let x = 0; x < this.state.columns; x++) drops[x] = 1;
  };

  componentDidMount() {
    for(let x = 0; x < this.state.columns; x++) drops[x] = 1;
    const canvas = this.canvasRef.current;
    console.log(canvas);
    const ctx = canvas.getContext('2d');
    this.drawInterval = setInterval(()=>this.draw(ctx), 45);
    window.onresize = () => this.onChangeColumns()
  }

  componentWillUnmount() {
    clearInterval(this.drawInterval);
  }

  render() {
    console.log(this.state);
    return (
      <CanvasField
        ref={this.canvasRef}
        width={this.state.windowInnerWidth}
        height={this.state.windowInnerHeight}
      />
    );
  }
}

export default Canvas;
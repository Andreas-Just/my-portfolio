import React from 'react';
import { CanvasField } from './CanvasStyled';

const CHINESE = '\u03E1\u03EF\u03BE\u0466\u0489\u058D\u05F0\u05E4\u05DC\u05D9\u05DE\u0574\u0556\u0569\u057B\u0648\u0643\u0626\u06AA\u06B0\u0636\u072E\u0A88\u0F3D\u1028\u10A7\u10ED\u10E5\u10DA\u10E2\u10FB\u104C\u1023\u104F\u1185\u129B\u12F7\u12F9\u1307\u16B5\u16D7\u16EA\u16CB\u18DB\u20B0\u20BF\u20B4\u2623\u2873\u28F3\u2A0A\u2A0F\u2C8A\u2C21\u2C56\u2D63\u2EE8\u2EC1\u2FA6\u2F4A\u2F57\u2F63\u3077\u304A\u30DB\u30D9\u34C8\u3431\u3409\u4E08\u4495\u9FC8\uA50D\uA56B\uA5E7\uA5FA\uA598\uA551\uA51B'.split('');
const FONT_SIZE = 12;
const drops = [];

class Canvas extends React.Component {
  state = {
    columns: this.props.canvas.canvasWidth/FONT_SIZE,
  };
  canvasRef = React.createRef();

  draw = (ctx) => {
    const { canvas, flag } = this.props;

    ctx.fillStyle = flag ? 'rgba(255,248,236,.16)' : 'rgba(0,0,0,.1)';
    ctx.fillRect(0, 0, canvas.canvasWidth, canvas.canvasHeight);

    ctx.fillStyle = flag ? '#876043' : 'royalblue';
    ctx.font = FONT_SIZE + "px courier new";
    for(let i = 0; i < drops.length; i++) {
      const text = CHINESE[Math.floor(Math.random()*CHINESE.length)];
      ctx.fillText(text, i*FONT_SIZE, drops[i]*FONT_SIZE);

      if(drops[i]*FONT_SIZE > canvas.canvasHeight && Math.random() > 0.975)
        drops[i] = 0;
      drops[i]++;
    }
  };

  onChangeColumns = () => {
    const { changeSize, canvas } = this.props;

    changeSize(window.innerWidth, document.body.scrollHeight);
    this.setState({
      columns: canvas.canvasWidth/FONT_SIZE,
    });
    for(let x = 0; x < this.state.columns; x++) drops[x] = 1;
  };

  updateCanvas = () => {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    this.drawInterval = setInterval(() => this.draw(ctx), 55);
    window.onresize = () => this.onChangeColumns();
  };

  componentDidMount() {
    for(let x = 0; x < this.state.columns; x++) drops[x] = 1;
    this.updateCanvas();
  }

  componentWillUnmount() {
    clearInterval(this.drawInterval);
    window.onresize = null
  }

  render() {
    const { canvasWidth, canvasHeight } = this.props.canvas;
    // console.log(document.body.scrollWidth, document.body.offsetWidth, document.body.clientWidth, document.documentElement.scrollWidth, document.documentElement.offsetWidth, document.documentElement.clientWidth);
    return (
      <CanvasField
        ref={this.canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      />
    );
  }
}

export default Canvas;
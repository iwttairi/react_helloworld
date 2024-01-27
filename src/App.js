import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hello world JSX!!";
  const styleObject = {
    color: 'red',
    fontSize: '32px',
  };
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
  };
  const boxStyle = {
    width: '33%',
    height: '180px',
    textAlign: 'center',
  };
  const middleBoxStyle = {
    ...boxStyle,
    backgroundColor: 'teal',
  };
  const colors = ['red', 'green', 'yellow', 'purple', 'orange', 'blue', 'pink', 'gray', 'brown'];
  return (
    <div style={containerStyle}>
      <div style={{...boxStyle, backgroundColor: colors[0]}}></div>
      <div style={{...boxStyle, backgroundColor: colors[1]}}></div>
      <div style={{...boxStyle, backgroundColor: colors[2]}}></div>
      <div style={{...boxStyle, backgroundColor: colors[3]}}></div>
      <div style={middleBoxStyle}>
        <h1 style={styleObject}>{greeting}</h1>
        <p>welcome to my react</p>
      </div>
      <div style={{...boxStyle, backgroundColor: colors[5]}}></div>
      <div style={{...boxStyle, backgroundColor: colors[6]}}></div>
      <div style={{...boxStyle, backgroundColor: colors[7]}}></div>
      <div style={{...boxStyle, backgroundColor: colors[8]}}></div>
    </div>
  );
}

export default App;

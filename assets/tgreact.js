class Fm extends React.Component {
  constructor(props){
    super(props);
    this.state={vac:"Covidshield"};
  }
 
render() {
return (
<form>
<p>Name the vaccine:</p>
<input
type="text" 
/>
</form>
);
}
}
ReactDOM.render(<Fm />, document.getElementById('content'));
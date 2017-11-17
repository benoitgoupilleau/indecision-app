class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle= this.handleToggle.bind(this);
        this.state={
            visibility: false
        };
    }

    handleToggle(){
        this.setState((prevState)=>{
            return {visibility: !prevState.visibility};
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && <p>This is the text</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
// const app={
// 	title: 'Visible toggle',
// 	text: 'This is the text',
// 	hidden:true
// };

// const appRoot = document.getElementById('app');

// const handleClick =()=>{
//     app.hidden= !app.hidden;
//     renderApp();
// };

// const renderApp= ()=>{
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={handleClick}>{app.hidden ? 'Show details': 'Hide details'}</button>
//             {!app.hidden && <p>{app.text}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };


// renderApp();
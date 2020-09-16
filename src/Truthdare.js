import React, {Component} from "react";
import * as firebase from "firebase";
import {Button} from "react-bootstrap";

class Truthdare extends Component{
    constructor() {
        super();
        this.state= {
            truth:[],
            color:[],
            dare: [],
            colrand:1,
            info:"Click on any button to start!"
        };
        this.handletruth = this.handletruth.bind(this);
        this.handledare = this.handledare.bind(this);

    }
    componentDidMount() {
        firebase.database().ref('/').on('value', snapshot => {
            console.log("s");
           console.log(snapshot.val().colorcodes);
           let colors=[];
           let truths=[];
           let dares=[];
           //choosing random color
           snapshot.val().colorcodes.forEach(element => colors.push(element));
           let colornum=Math.floor(Math.random()*Math.floor(colors.length));
           this.setState({color: colors});

           //changing background color
           document.getElementById("card1").style.backgroundColor=this.state.color[colornum];

           //choosing random truth
           snapshot.val().truth.forEach(element => truths.push(element));
           let truthnum=Math.floor(Math.random()*Math.floor(truths.length));
           this.setState({truth: truths});
           //choosing random dare
           snapshot.val().dare.forEach(element => dares.push(element));
           let darenum=Math.floor(Math.random()*Math.floor(dares.length));
           this.setState({dare: dares});
        });
    }
            handletruth(){
                let colnum=Math.floor(Math.random()*Math.floor(this.state.color.length));
                let truthnum=Math.floor(Math.random()*Math.floor(this.state.truth.length));
                document.getElementById("card1").style.backgroundColor=this.state.color[colnum];

                this.setState({info: this.state.truth[truthnum]});
            }
            handledare(){
                let colnum=Math.floor(Math.random()*Math.floor(this.state.color.length));
                let darenum=Math.floor(Math.random()*Math.floor(this.state.dare.length));
                document.getElementById("card1").style.backgroundColor=this.state.color[colnum];

                this.setState({info: this.state.dare[darenum]});
            }

    render() {

        return (
            <div>
            <h1 id="card1" style={styles.card}>{this.state.info}</h1><br/>
            <div style={styles.buttondiv}>
            <Button onClick={this.handletruth} className="btn btn-primary"> Truth</Button>
                <Button onClick={this.handledare} className="btn-danger">Dare</Button>
            </div>
            </div>
        );
    }

}
const styles={
    card:{
        textAlign: 'center',
        fontWeight: 13,
        height: 200,
        width:600,
        margin:'auto',
        borderRadius:25,
        paddingTop:200,
        marginTop:200,
    },
    buttondiv:{
        margin:'auto',


    }
};
export default Truthdare;


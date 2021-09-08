import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleTop = this.handleTop.bind(this)
        this.handleBottom = this.handleBottom.bind(this)
    }


        componentDidMount(){
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                this.setState({ allMemeImgs: memes })
            })
        }

        handleTop(event){
            this.setState({
                topText: event.target.value,
            })
        }

        handleBottom(event){
            this.setState({
                bottomText: event.target.value
            })
        }

        render(){
            return (
                <div>
                    <form className="meme-form">
                        
                          <input placeholder="top-text" 
                                 name="top-text" 
                                 type="text" 
                                 value={this.state.topText}
                                 onChange={this.handleTop}
                          />  
                         
                          <input placeholder="bottom-text" 
                                 name="bottom-text" 
                                 type="text" 
                                 value={this.state.bottomText}
                                 onChange={this.handleBottom}
                          />
                          <button>Generate</button>
                    </form>
                    
                    <div className="meme">
                        
                        <img src={this.state.randomImg} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>

                    </div>
                </div>
            )
        }
    }


export default MemeGenerator
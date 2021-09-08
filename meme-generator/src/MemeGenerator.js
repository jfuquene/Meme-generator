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
        this.handleChange = this.handleChange.bind(this)
    }


        componentDidMount(){
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                this.setState({ allMemeImgs: memes })
            })
        }

        handleChange(event){
            const {name, value } = event.target
            this.setState({
                [name] : value
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
                                 onChange={this.handleChange}
                          />  
                         
                          <input placeholder="bottom-text" 
                                 name="bottom-text" 
                                 type="text" 
                                 value={this.state.bottomText}
                                 onChange={this.handleChange}
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
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
    }


        componentDidMount(){
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                this.setState({ allMemeImgs: memes })
            })
        }

        render(){
            return (
                <div>
                    <form className="meme-form">
                        
                          <input placeholder="top-text" 
                                 name="otp-text" 
                                 type="text" 
                                 value={this.state.topText}
                          />  
                         
                          <input placeholder="bottom-text" 
                                 name="bottom-text" 
                                 type="text" 
                                 value={this.state.bottomText}
                          />
                          <button>Gen</button>
                    </form>
                </div>
            )
        }
    }


export default MemeGenerator
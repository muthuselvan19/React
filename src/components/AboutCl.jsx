import React from "react";
import axios from "axios";

class AboutCl extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "NONE",
                id: "111",
                avatar_url:"No profile Finded"
            }
        }

        // console.log(props);
    }
    async componentDidMount() {
        const val = await axios.get("https://api.github.com/users/muthuselvan19");
        const data = val.data;

        this.setState({
            userInfo :data
        })
        console.log(data);
    }
    render() {

        const { name, location , id ,avatar_url,login} = this.state.userInfo;
        return (
            <div className="about" style={{ marginLeft: "15px" }}>
                <img src={avatar_url} alt="" />
                <h4>Name : {name}</h4>
                <p>Location : {location}</p>
                <p>ID  : {id}</p>
                <p>This Website was Created by :   "{login}" </p>
            </div>
        );
    }
}

export default AboutCl;
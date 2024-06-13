import React, {Component} from "react";
import IPAddress from "./IPAddress";

let xhr; //XMLHttpsRequest

class IPAddressContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            ip_address:"..."
        };

        this.processRequest = this.processRequest.bind(this);

    }

    componentDidMount(){
        xhr=new XMLHttpRequest(); //XMLHTTP 요청객체
        xhr.open("GET","https://ipinfo.io/json",true); //객체를 열어 json 요청 입력
        xhr.send(); //https://ipinfo.io/json에 요청을 전송

        xhr.addEventListener("readystatechange",this.processRequest,false);
        //readystatechange: readyState가 변경될 시?
    }

    processRequest(){
        if(xhr.readyState===4&&xhr.status===200) {// ===: "Strict" Equal Operator, 값과 값의 종류(Data Type)가 모두 같은지를 비교
            let response = JSON.parse(xhr.responseText);
            //readyState: 0~4, 4: the operation is complete.
            this.setState({
                ip_address: response.ip
            });
        }
    }

    render(){
        return (
           <IPAddress ip={this.state.ip_address}/>
        );
    }
}
export default IPAddressContainer;
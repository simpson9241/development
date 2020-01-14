import React, { Component } from 'react';
import "./InputForm.css"
class InputForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        //상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            name: '',
            phone: ''
        });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <input id="name" placeholder="이름" value={this.state.name} onChange={this.handleChange} name="name"/>
                </div>
                <div>
                <input id="date"placeholder="yyyy-mm-dd" value={this.state.date} onChange={this.handleChange} name="date" />
                </div>
                {/* <div>{this.state.name} {this.state.phone}</div> */}
                <div>
                <button id="submit" type="submit">추가</button>
                </div>
            </form>
        );
    }
}

export default InputForm;
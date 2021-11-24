import React, { Component } from 'react';

export default class From extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        password: ''
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        const {name,email,phone,password} = this.state;
        alert(`${name} and ${email} and ${phone} and ${password}`)
    }
  render() {
    return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					type="text"
					name="name"
					placeholder="name"
				/>
				<input
					onChange={this.handleChange}
					type="text"
					name="email"
					placeholder="email"
				/>
				<input
					onChange={this.handleChange}
					type="text"
					name="phone"
					placeholder="phone"
				/>
				<input
					onChange={this.handleChange}
					type="password"
					name="password"
					placeholder="password"
				/>
				<input
					type="submit"
					value="submit"
				/>
			</form>
		</div>
	);
  }
}

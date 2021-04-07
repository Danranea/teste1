import React, { Component } from 'react';
import api from '../../Api';

class View2 extends Component {

    state = {
        posts: [],
    }

    async componentDidMount() {
        const resposta = await api.get('');
        // console.log(resposta.data);
        this.setState({ posts: resposta.data })
    }

    render() {

            const { posts } = this.state
            return ( <
                div >

                {
                    posts.map(posts => ( <
                            li >
                            <
                            h2 >
                            Título: { posts.title } <
                            /h2> 

                            <
                            h2 > Corpo da Mensagem: { posts.body } <
                            /
                            h2 >
                            <
                            /li> ))
                        }

                        <
                        /div>  

                    );
                }
            }

            export default View2;
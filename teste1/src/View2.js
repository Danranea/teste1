import React, { Component } from 'react';
import api from './Api';

import styles from '../src/styles.css'

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

                <
                h1 className = "listar-posts" >
                Listar posts <
                /h1>   

                {
                    posts.map(posts => ( <
                            li >
                            <
                            h2 >
                            Usuário: { posts.userId } <
                            /h2> 

                            <
                            h2 >
                            <
                            strong >
                            Postagens:
                            <
                            /strong>   { posts.id }

                            <
                            /h2>

                            <
                            h2 >
                            Título: { posts.title } <
                            /h2> 

                            <
                            h2 > Corpo da Mensagem: { posts.body } <
                            /
                            h2 >
                            <
                            div >
                            <
                            button className = "button-detalhes" >
                            Detalhes < /button>   < /
                            div > <
                            /li> ))
                        }

                        <
                        /div>

                    );
                }
            }

            export default View2;
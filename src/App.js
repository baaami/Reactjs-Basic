import React from 'react';
import axios from 'axios';

// class Component ( state를 위해서 사용 )

// react는 자동으로 class component의 render method를 자동으로 실행시킨다.
class App extends React.Component{
    // constructor은 js class를 만들 때 호출되는 것이다.
    // constructor이 가장 먼저 실행되고 그 이후에 render이 호출된다.
    // compoent mounting, updating, unmounting에 대해서 찾아보기 (component가 실행되는 내부 과정이다.)
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        }

        this.getMovies = async () => {
            // axios는 시간이 좀 걸리기 때문에 데이터를 fetch 해올 때까지 기다려줘야 한다.
            const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
        }
    }

    // 처음에 render을 하면 가장 먼저 실행되는 함수
    componentDidMount(){
        this.getMovies();
    } 
    render(){
        const { isLoading } = this.state;
        return (
            <div>{isLoading ? "Loading..." : "We are ready"}</div>
        );
    }
}

export default App;
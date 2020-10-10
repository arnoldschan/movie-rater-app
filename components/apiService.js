const BASE_URL = "http://192.168.43.154:8001"

export class API {
    constructor(){
        const token = "12f17f8d7daa4f40a6155138e9894bfecccb1598"
        this.token = token;
    }
    static loginUser(body){
        return fetch(`${BASE_URL}/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
            body: JSON.stringify( body )
        }).then ( resp => resp.json())
    }
    static registerUser(body){
        return fetch(`${BASE_URL}/api/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify( body )
            }).then ( resp => resp.json())
    }

    getMovies(){
        return fetch(`${BASE_URL}/api/movies/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.token}`,
            }
            })
            .then( resp => resp.json())
            .catch( error => console.log(error))
    }
    updateMovie(mov_id, body){
        return fetch(`${BASE_URL}/api/movies/${mov_id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.token}`,
        },
            body: JSON.stringify( body )
        })
    }

    createMovie(body){
        return fetch(`${BASE_URL}/api/movies/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.token}`,
        },
            body: JSON.stringify( body )
        })
    }

    updateRating(mov_id, rate) {
        return fetch(`${BASE_URL}/api/movies/${mov_id}/rate_movie/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.token}`,
        },
            body: JSON.stringify( {stars: rate} )
        })
        .then( resp => resp.json())
        .catch( error => console.log(error))
        }

    getDetails(mov_id) {
        return fetch(`${BASE_URL}/api/movies/${mov_id}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${this.token}`,
                }})
                .then( resp => resp.json())
                .catch( error => console.log(error))
        }

    deleteMovie(mov_id) {
        return fetch(`${BASE_URL}/api/movies/${mov_id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${this.token}`,
                }})
                .catch( error => console.log(error))
        }
}
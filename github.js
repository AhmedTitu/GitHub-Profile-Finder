class GitHub{
    constructor(){
        this.clientID = 'Iv1.598b58d081656c59'
        this.clientSecret = 'e4e8de69f69056d5ace8a27acc0258415ed1d872'
        this.reposCount = 5
        this.reposSort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.clientSecret}`) 

        const profile = await profileResponse.json()

        const reposResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientID}&client_secret=${this.clientSecret}`) 

        const repos = await reposResponse.json()
        
        return{
            profile ,
            repos
        }
    }
}
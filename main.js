// Init Github
const gitHub = new GitHub
const ui = new UI


const searchUser = document.querySelector('#search-user')

searchUser.addEventListener('keyup' , (e) => {
    const searchText = e.target.value
    if(searchText !== ''){
        gitHub.getUser(searchText).then(data => {
            if(data.profile.message === "Not Found"){
                // show alert
                ui.showAlert('User not found' , 'alert alert-danger')
            }else{
                //show profile
                ui.showProfile(data.profile)
                //show repos
                ui.showRepos(data.repos)
            }
        })
    }else{
        //clear Profile
        ui.clearProfile()
    }
})





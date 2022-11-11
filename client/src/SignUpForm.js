import React, {useState} from 'react'

function SignUpForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const {username, email, password} = formData
    
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            email,
            password
        }

        fetch (`/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => setFormData(formData(user)))
    }
        
        const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
        }
    return (
        <div class="row">
        <form class="col s12" onSubmit={onSubmit}>
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Username" id="username" type="text" class="validate" name='username' value={username} onChange={handleChange}/>
              <label for="username">Username</label>
            </div>
            </div><br></br>

          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" name='password' class="validate" value={password} onChange={handleChange}/>
              <label for="password">Password</label>
            </div>
          </div><br></br>

          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" name='email' class="validate" value={email} onChange={handleChange}/>
              <label for="email">Email</label>
            </div>
          </div>
          <button class="btn waves-effect waves-light" type="submit" name="action">Sign Up
            <i class="material-icons right"></i>
         </button>
        </form>
      </div>
    )
}

export default SignUpForm;
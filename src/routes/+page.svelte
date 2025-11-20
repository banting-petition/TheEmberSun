<script>

    const users = [
        {username:'Anastasia', password:'Kondratovich', name:'Anastasia'},
        {username: 'Stephanie', password:'Endacott', name:'Stephanie'},
        {username: 'Thyo', password: 'Kapi', name:'Thyo'},
    ]; //usernames for the login system.
    let username = $state('');
    let password = $state('');
    let error = $state(''); //setting error variables.

    function handleLogin(e) {
        e.preventDefault();
        const user= users.find(u => u.username === username && u.password === password);
        if (user) {
           localStorage.setItem('currentUser', JSON.stringify(user))
            localStorage.setItem ('user', username);
            window.location.href = '/dashboard';

        } else {
            error= 'Invalid Username or Password. Please try again.';
        }
    }
</script>
<form onsubmit={handleLogin} class="login-form">
    <h1 class="center">Welcome to the EmberSun! Please Log In to access the Articles. </h1>
    {#if error}
        <p class="error">{error}</p>
        {/if}
    <label class="font">
        Nom D'utilisateur
        <input type="text" bind:value={username} required placeholder="Anastasia"/>
    </label>
    <label class="font">
        Mot De Passe
        <input type="password" bind:value={password} required placeholder="Mot De passe"/>
    </label>
    <button type="submit" class="font">Entrer</button>
    <details style="margin-top:1rem; font-size:0.8rem; color:#666">
        <summary>Account</summary>
        <ul style="text-align: left;">
            <li class="font">alice/123</li>
            <li class="font">alice/456</li>
            <li class="font">alice/789</li>
        </ul>
    </details>
</form>

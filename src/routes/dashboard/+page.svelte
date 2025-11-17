
<nav>
    <a> </a>
    <br>
</nav>
<script>
    import {dashboard} from "$lib/articles.js";
    import { browser } from '$app/environment';
    let loading = true;
    let user = null;
    if (browser) {
        user = localStorage.getItem('user');
        if (!user) {
            location.href = '/';
        }
    }
    function logout() {
        if (browser) {
            localStorage.clear();

        }
        location.href = '/';
    }
</script>
{#if browser && user}
    <p>Logged in as: {user}</p>
    <button on:click={logout}>Log Off</button>
{:else}

    {#if dashboard}
    <p class="font">Loading... Please Wait...</p>
        {/if}
{/if}
<h1 class="font">Here are the latest articles.</h1>
<div class="grid">
    {#each dashboard as article }
        <a class="card" href="{`/dashboard/${article.slug}`}">
           <img src="/static/images/KenaiSpires.jpg" alt="Doon Harrow and Lina Mayfleet escape Ember/"/>
        <p>{dashboard.title}</p>
        </a>
        {/each}
</div>

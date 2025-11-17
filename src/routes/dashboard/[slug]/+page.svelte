<script lang="ts">
    import {dashboard} from "$lib/articles.js";
    export let params;
    type Article = {
        slug: string;
        title: string;
        image: string;
        content?: string;
    };
    const article: Article | undefined = dashboard.find(
        (a: Article) => a.slug === params.slug
    );
</script>
{#if article}
    <h1>{article.title}</h1>
    <img src={"/static/images/KenaiSpires.jpg"} alt="{article.title}" width="300"/>
    <p>{article.content}</p>
    {:else}
    <p>Article cannot be found at this time</p>
{/if}
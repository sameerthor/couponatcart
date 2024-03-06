<script>
    import { clickOutside } from "./clickOutside.js";

    /** @type {import('./$types').PageServerData} */
    export let data;
</script>
<div class="blgbrd">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <ol itemscope itemtype="http://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <a itemprop="item" href="/">
                            <span itemprop="name">Home</span> </a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li>></li>
                    <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                        <span itemprop="name">Blogs</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
<section class="">
    <div class="container">
        <div class="row">
            {#each data.res.blogs as blog}
            <div class="col-md-12 col-sm-12 col-xs-12">

                <div class="blgbx shadow">
                    <a href="/{blog.slug}">
                        <img src="" alt="{blog.title}">
                    </a>
                    <a href="/{blog.slug}">
                        <h4 class="mx-4 pt-5">
                          {blog.title}
                        </h4>
                    </a>
                    <p class="mx-3 pb-5">
                        {blog.content.replace(/<[^>]*>?/gm, '').substring(0, 50)}
                        <a href="/{blog.slug}" class="font-weight-bold">read more ..</a>
                    </p>
                </div>

            </div>
            {/each}        
        </div>
    </div>
</section>
<style>
     .blgbrd{margin:20px}.blgbrd ol li{display:inline-block;margin-right:10px}.blgbx{background:#fff}.blgbx img{width:100%}.blgbx p{padding:10px}
</style>
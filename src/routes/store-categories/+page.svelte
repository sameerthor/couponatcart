<script>
// @ts-nocheck

    /** @type {import('./$types').PageServerData} */
    export let data;
    console.log(data);
</script>
<section class="allstrs">
    <!-- Container Start -->
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- Section title -->
                <div class="section-title">
                    <h2>Categories</h2>
                </div>
                <div class="row border-bottom">
                    <!-- Category list -->
                    {#each data.res.categories as cat}
                        
                        <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                            <a href="store-category/{cat.slug}">
                                <div class="card mb-3">
                                    <div class="card-body text-center p-3">
                                        {cat.name}
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/each}

                </div>
                <br>
            </div>
        </div>
    </div>
    <!-- Container End -->
</section>

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
                        <span itemprop="name">Store Categories</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
<style>
    .allstrs{margin:24px 0}.blgbrd{margin:20px}.blgbrd ol li{display:inline-block;margin-right:10px}
</style>
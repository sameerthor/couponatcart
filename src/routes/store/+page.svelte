<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
  
</script>
<section class="section">
    <!-- Container Start -->
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- Section title -->
                <div class="section-title">
                    <h2>Popular Stores</h2>
                </div>
                <div class="row border-bottom">
                    <!-- Category list -->
                    {#each data.res.home_stores as store}
                        <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                            <a href="/store/{store.slug}">
                                <div class="card mb-3">
                                    <div class="card-body text-center p-3">
                                        {store.name}
                                    </div>
                                </div>
                            </a>
                        </div>
                   {/each}
                </div>
            </div>
        </div>
    </div>
    <!-- Container End -->
</section>

<div class="container">
    <div class="row">
        <div class="col-md-12 mb-5">
            <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="d-inline-flex">
                <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"
                    class="d-inline-flex px-2">
                    <a itemprop="item" href="/">
                        <span itemprop="name">Home</span> </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="d-inline-flex px-2">></li>
                <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"
                    class="d-inline-flex px-2">
                    <span itemprop="name">Stores</span>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </div>
    </div>
</div>

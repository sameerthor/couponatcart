<script>
        import { clickOutside } from "./clickOutside.js";

    // @ts-nocheck

    /** @type {import('./$types').PageServerData} */
    export let data;

</script>
<section class="allstrs">
    <!-- Container Start -->
    <div class="container">
        <div class="row">
            <div class="col-12">
                <!-- Section title -->
                <div class="section-title">
                    <h2>{data.res.category.name}</h2>
                </div>
                <div class="row border-bottom">
                    <!-- Category list -->
                   { #each data.res.stores as cat }
                    <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                        <ul class="category-list" >
                            <li><a class="catName" href="/store/{cat.slug}"><i class="fa fa-circle-o"></i>{cat.name}</a></li>
                        </ul>
                    </div>
                   { /each }

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
						<span itemprop="name">Home</span>  </a>
					<meta itemprop="position" content="1" />
					</li>
					<li>></li>
					<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
						<span itemprop="name">{data.res.category.name}</span>
					<meta itemprop="position" content="2" />
					</li>
				</ol>
            </div>
        </div>
	</div>
</div>

<style>
 .allstrs{margin:24px 0}.blgbrd{margin:20px}.blgbrd ol li{display:inline-block;margin-right:10px}
 .blgbrd a{
        color: #222;
        text-decoration: none;
    }
    .blgbrd a span:hover{
        color: #368c86;
        text-decoration: underline;
    }

 .category-list{
    text-align: center;
    padding: 0rem;
 }
 .category-list .catName{
        border-radius: 4px;
        padding: .8rem 1rem;
        border: 1px solid #99999957;
        color: #222;
        text-decoration: none;
        font-weight: 500;
        font-size: .9rem;
        letter-spacing: .5px;
    }
    .category-list .catName:hover{
        color: #368c86;
        text-decoration: underline;
    }
</style>

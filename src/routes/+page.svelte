<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
    import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  
  const handleNextClick = () => {
    carousel.goToNext()
  }
    </script>
    <section class="hero-area bg-1 text-right">
        <!-- Container Start -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Header Contetnt -->
                    <div class="content-block">
                        <h1>Best Deals & Coupons</h1>
                        <p>We have 12569 offers from 6122 stores <br> Start saving now</p>
                    </div>
                    <!-- Advance Search -->
                    <div class="advance-search">
                        <form>
                            <div class="row">
                                <!-- Store Search -->

                                <div class="col-lg-12 col-md-12">
                                    <div class="block d-flex">
                                        <input type="text" class="form-control mx-2 mb-2 mr-sm-2 mb-sm-0" id="search"
                                            placeholder="Search for store" name="q">
                                        <!-- Search Button -->
                                        <button type="submit" class="btn btn-secondary">SEARCH</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container End -->
    </section>

    

    <section class="clients-slider-wrapper section pb-0">
        <!-- Container Start -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2 class="font-weight-bold"> Top <span style="color:#368c86">Brands's</span> of The Month</h2>
                    </div>
                </div>
            </div>
            <div class="row border-bottom text-center">
                {#each data.special_stores as res}
                    <!-- Client 01 -->
                    <div class="col-lg-2 col-md-3 col-sm-6 mb-3">
                        <a href="/{res.slug}">
                            <img src="https://couponatcart.com/images/{res.store_logo}" class="img-fluid rounded-circle shadow"
                                alt="{res.name}" loading="lazy">
                        </a>
                    </div>
                    {/each}
                    <!-- Client Slider -->
            </div>
        </div>
        <!-- Container End -->
    </section>



    <section class="popular-deals section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2> <span style="color:#368c86">Today's</span> Popular Deals</h2>
                    </div>
                </div>
            </div>
            <div class="row text-center border-bottom">

                <div class="deal_slider owl-carousel owl-theme owl-loaded">
                    
{#if browser}
<Carousel
  bind:this={carousel}
  particlesToShow={8}
  arrows={true}
>
                    {#each data.stores  as res}
                        
                        <!-- deal card -->
                        <div class="slide-content">
                        <div class="deal-item bg-light">
                            <div class="media flex-shrink-0">
                                <div class="media-body d-flex ">
                                    <a href="{res.slug}">
                                        <!-- Card Image -->
                                        <img src="https://couponatcart.com/images/{res.store_logo}" alt="{ res.name }" class="img-fluid" loading="lazy">
                                    </a>
                                </div>
                            </div>
                            <ul class="deal-list">
                                <li class="pt-3">
                                    <h6>{res.name}</h6>
                                </li>
                            </ul>
                        </div>
                        </div>
                        {/each}
                    </Carousel>
                    {/if}
                    
                </div>
                <div class="col-12">
                    <a href="/stores" class="btn btn-main mt-30">Get More Deals</a>
                </div>

            </div>
        </div>
    </section>


 

    <section class="deals-categories section">
        <!-- Container Start -->
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section title -->
                    <div class="section-title">
                        <h2 class="font-weight-bold">Popular <span style="color:#368c86">Categories</span></h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="row text-center border-bottom">
                        <div class="category_slider owl-carousel owl-theme owl-loaded">
                            <!-- Category list -->
                            {#if browser}
<Carousel
  bind:this={carousel}
  particlesToShow={8}
  arrows={false}>
                            {#each data.categories as res}
                            <div class="category-item">
                                <div class="media flex-shrink-0">
                                    <div class="media-body d-flex">
                                        <a href="/store-categories/{res.slug}">
                                            <!-- Card Image -->
                                            <img src="https://couponatcart.com/images/{res.thumb}" alt="{res.name}"
                                                class="img-fluid shadow" loading="lazy">
                                        </a>
                                    </div>
                                </div>
                                <ul class="category-list">
                                    <li class="mt-3">
                                        <a href="/store-categories/{res.slug}">{res.name}</a>
                                    </li>
                                </ul>
                            </div>
                            {/each}
                        </Carousel>
                              {/if}
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <!-- Container End -->
    </section>
    <section class="best-selling section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2 class="font-weight-bold"> Best <span style="color:#368c86"> Selling</span></h2>
                    </div>
                </div>
            </div>

            <div class="row text-center border-bottom">
                <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                    <a href="https://couponatcart.com/store/lego-coupons">
                        <div class="card">
                            <img class="card-img-top" src="https://couponatcart.com/images/home/lego.webp" alt="LEGO Coupons"
                                loading="lazy" style="width:100%">
                            <div class="card-body">
                                <p class="card-text font-weight-bold my-2">LEGO Coupons</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                    <a href="https://couponatcart.com/store/microsoft-coupons">
                        <div class="card">
                            <img class="card-img-top" src="https://couponatcart.com/images/home/microsoft.webp"
                                alt="Microsoft Coupons" loading="lazy">
                            <div class="card-body">
                                <p class="card-text font-weight-bold my-2">Microsoft Coupons</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                    <a href="https://couponatcart.com/store/ray-ban-coupons">
                        <div class="card">
                            <img class="card-img-top" src="https://couponatcart.com/images/home/rayban.webp" alt="RayBan Coupons"
                                loading="lazy">
                            <div class="card-body">
                                <p class="card-text font-weight-bold my-2">Ray Ban Coupons</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                    <a href="https://couponatcart.com/store/river-island-coupons">
                        <div class="card">
                            <img class="card-img-top" src="https://couponatcart.com/images/home/riverisland.webp"
                                alt="River Island Coupons" loading="lazy">
                            <div class="card-body">
                                <p class="card-text font-weight-bold my-2">River Island Coupons</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>


    <section class="coupon-at-cart section">
        <!-- Container Start -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title">
                        <h2 class="font-weight-bold"> Welcome to<span style="color:#368c86"> CouponAtCart!</span></h2>
                    </div>
                </div>
            </div>
            <!-- Coupon At Cart -->
            <div class="row justify-content-center">
                <div class="col-12 col-sm-12 col-lg-12 align-self-center">
                    <div class="row border-bottom">
                        <div class="col-12">
                            <div class="details-box-intro">
                                <div class="details-description">
                                    <p class="mt-2">
                                        At CouponAtCart, we provide customers with amazing discounts and deals for online
                                        shopping. With a promise to deliver the best discounts, we curate the best coupon
                                        and promo codes to give you an enjoyable shopping experience. We offer a broad
                                        spectrum of categories, including, Electronics, Home Decor, Apparel, Pet Supplies,
                                        Grooming Essentials, and many more. Furthermore, with an exceptional collection of
                                        coupons, deals, and discounts, we help users save money while shopping online
                                        without sacrificing quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Container End -->
    </section>
    <style>
        .deal-item {
            width: 88%;
        }
        .section-title h2{
            font-weight: 600;
        }
        .slide-content .media-body{
            border-radius: 50%;
            background-color: #ebeaea;
            justify-content: center;
            align-items: center;
        }
        .slide-content .media-body a{
            background-color: #ebeaea;
        }
        .deal-list li h6{
            font-size: .85rem;
            letter-spacing: .5px;
        }
        .category-list {
            padding: 0rem;
            margin: 0rem;
        }
        .category-item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .category-item .media .media-body img{
            border-radius: 20px;
            background-color: #fff;
        }
        .category-list  li a {
            text-decoration: none;
            color: #222;
            font-size: .9rem;
            font-weight: 500;
            letter-spacing: .5px;
        }
    </style>
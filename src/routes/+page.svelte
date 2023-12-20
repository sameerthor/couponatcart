<script>
            import { clickOutside } from "./clickOutside.js";
    /** @type {import('./$types').PageServerData} */
    export let data;
    let showCouponModal = false;
    let showDealModal = false;
    let modalData = null;

    const showModal = (a, b) => {
        let c = document.createElement("a");
        c.target = "_blank";
        c.href = b.aff_url;
        c.click();
        modalData = b.coupons[0];
        setTimeout(function () {
            if (a == "showCouponModal") {
                showCouponModal = true;
            } else {
                showDealModal = true;
            }
        }, 100);
    };

    const hideModal = () => {
        showCouponModal = false;
        showDealModal = false;
    };

    const copy = (word) => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(word);

        // Alert the copied text
        alert("Copied the code: " + word);
    };
    </script>

<!-- ******************************************************************** -->
<section class="container-fluid" style="background-color: #f1f1fe">
    <div class="row">
        <div class="col-lg-12 mx-auto">
            <div class="row main-section">
                <div class="col-lg-6 col-md-6 col-sm-12 left">
                    <div class="left-item">
                        <div>
                            <h1>Buy More, Save More</h1>
                            <h2>
                                Save With Our Best Coupons, Promo Codes & Deals!
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eos aliquid quas eligendi iste
                                sapiente laborum, assumenda dicta.
                            </p>
                            <div class="text-center shop-btn">
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 right">
                    <div>
                        <img src="./images/shop_laptop.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ******************************Category****************************************** -->
<section class="container-fluid top-category">
    <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-10 mx-auto">
            <h2>Great Discount on Top Category</h2>
            {#if data.categories}
                <div class="row row-cols-2">
                    {#each data.categories as item}
                        <div class="col-lg-2 col-md-3 col-sm-4 category-box">
                            <div class="category-item">
                                <a href={item.slug}
                                    ><img
                                        src="https://couponatcart.com/images/{item.thumb}"
                                        alt=""
                                    /></a
                                >
                                <a href={item.slug} class="category-title"
                                    >{item.name}</a
                                >
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>
<!-- ***********************************Featured Stores****************************************************** -->
<section class="container-fluid featured-store">
    <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10 mx-auto">
            <h2>Featured Stores</h2>
            {#if data.special_stores}
                <div class="row row-cols-2">
                    {#each data.special_stores as item}
                        <div class="col-lg-2 col-md-3 col-sm-6 featured-box">
                            <div class="featured-item">
                                <a href="/{item.slug}"
                                    ><img
                                        src="https://couponatcart.com/images/{item.store_logo}"
                                        alt=""
                                    /></a
                                >
                                <a href="/{item.slug}" class="store-name">{item.name}</a>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
</section>
<!-- ***********************************Top Online Stores****************************************************** -->
<section class="container-fluid online-store">
    <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10 mx-auto">
            <h2>Top Online Stores</h2>
            <div class="row row-cols-2">
                {#each data.stores.slice(0,12) as item}
                <div class="col-lg-2 col-md-3 col-sm-4 online-box">
                    <div class="online-item">
                        <a href="/{item.slug}"
                            ><img
                                src="https://couponatcart.com/images/{item.store_logo}"
                                alt=""
                            /></a
                        >
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
<!-- ************************************Hot Deals of the Day*************************************** -->
<section class="container-fluid hot-deal">
    <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-10 mx-auto">
            <h2>Hot Deals of the day</h2>
            <div class="row">
                {#each data.stores.slice(12,24) as item}

                <div class="col-lg-3 col-md-4 col-sm-12 deal-box">
                    <div class="deal-item">
                        <a href="/{item.slug}">
                            <img
                                src="https://couponatcart.com/images/{item.store_logo}"
                                alt=""
                            /></a
                        >
                        <p class="desc">
                            {item.coupons.length>0?item.coupons[0].descp:''}
                        </p>
                        {#if item.is_deal == 1}
                        <button
                            id="unlockDeal"
                            on:click={() => {
                                showModal("showDealModal", item);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#getDeal"
                            type="button"
                            ><i
                                class="fa fa-unlock-alt"
                                aria-hidden="true"
                            ></i>unlock deal</button
                        >
                    {:else}
                        <button
                            on:click={() => {
                                showModal("showCouponModal", item);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#displayCode"
                            type="button">show code</button
                        >
                    {/if}
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
<!-- ***********************************************Get Discount from you faviroute stores*********************** -->
<section class="container-fluid fav-store">
    <div class="container">
        <h2>Get Discount form your favirout stores</h2>
        <div class="row row-cols-2">
            {#each  data.stores.slice(24,36) as item }
            <div class="col-lg-1 col-md-3 col-sm-6 store-box mx-auto">
                <div class="store-item">
                    <a href="/{item.slug}"
                        ><img src="https://couponatcart.com/images/{item.store_logo}" alt="" /></a
                    >
                    <a href="/{item.slug}" class="discount-tag">UP TO {item.coupons[0].type_text}% OFF</a>
                </div>
            </div>
            {/each}
            
        </div>
    </div>
</section>
<!--*********************************Coupon Pop-Up GET-CODE Modal*********************************************** -->
{#if showCouponModal === true || showDealModal === true}
    <div class="modal-backdrop fade show"></div>
{/if}

{#if showCouponModal === true}
    <div
        class="modal fade show"
        use:clickOutside
        on:outsideclick={() => {
            hideModal();
        }}
        id="displayCode"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        role="dialog"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        {modalData.title}
                    </h5>
                    <button
                        type="button"
                        on:click={() => {
                            showCouponModal = false;
                        }}
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body text-center">
                    <span id="showCode">{modalData.coupon_code}</span>
                </div>
                <div>
                    <h5 class="modal-info text-center">
                        Select The Coupon Code & Hit Copy Button to Copy Your
                        Code
                    </h5>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        on:click={() => copy(modalData.coupon_code)}
                        >COPY CODE</button
                    >
                    <button type="button" on:click={()=>window.location.href=modalData.store.aff_url} class="btn visit-store"
                        >Visit Store</button
                    >
                </div>
            </div>
        </div>
    </div>
{/if}
<!--*********************************Coupon Pop-Up GET-deal Modal*********************************************** -->
{#if showDealModal === true}
    <div
        class="modal fade show"
        use:clickOutside
        on:outsideclick={() => {
            hideModal();
        }}
        id="getDeal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center" id="exampleModalLabel">
                        {modalData.title}
                    </h5>
                    <button
                        type="button"
                        on:click={() => {
                            showDealModal = false;
                        }}
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body text-center">
                    <span id="showCode"
                        >Deal Activated<i
                            class="fa fa-check-circle-o"
                            aria-hidden="true"
                        ></i></span
                    >
                </div>
                <div>
                    <h5 class="modal-info text-center">
                        No Coupon Code Required
                    </h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn visit-store" on:click={()=>window.location.href=modalData.store.aff_url}
                        >Visit Store</button
                    >
                </div>
            </div>
        </div>
    </div>
{/if}
<style>
    .main-section {
        padding-bottom: 2rem;
    }
    .main-section img {
        width: 100%;
        object-fit: contain;
    }
    .main-section .left {
        display: flex;
        justify-content: right;
        align-items: center;
    }
    .left .left-item {
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 90%;
    }
    .left-item h1 {
        font-weight: 700;
        text-transform: uppercase;
        color: #8043dc;
        font-size: 3.2rem;
        margin-bottom: 1rem;
    }
    .left-item h2 {
        font-weight: 600;
        text-transform: uppercase;
        color: #8463b5;
        font-size: 1.6rem;
        padding-top: 1rem;
    }
    .left-item p {
        font-size: 0.9rem;
        text-transform: uppercase;
        color: #8463b5;
        margin-top: 1rem;
    }
    .left-item .shop-btn {
        margin-top: 2rem;
    }
    .shop-btn button {
        border: none;
        outline: none;
        border-radius: 1.76rem;
        background-color: #8043dc;
        color: #fff;
        padding: 0.8rem 2rem;
        font-weight: 500;
        text-transform: uppercase;
        border: 2px solid #8043dc;
        transition: 0.2s ease-in-out;
    }
    .shop-btn button:hover {
        background-color: transparent;
        color: #8043dc;
    }
    @media (max-width: 1000px) {
        .main-section .left {
            margin-top: 1rem;
        }
    }
    @media (max-width: 768px) {
        .main-section .left {
            justify-content: center;
        }
        .left-item h1 {
            font-size: 2.2rem;
        }
        .left-item h2 {
            font-size: 1.4rem;
        }
        .left-item p {
            font-size: 0.85rem;
            line-height: 1.4rem;
        }
    }
    /* *****************************Featured-Store******************************************* */
    .featured-store {
        background-color: #dceeff;
        padding-top: 3rem;
        padding-bottom: 2rem;
    }
    .featured-store h2 {
        color: #000;
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1.6rem;
    }
    @media (max-width: 768px) {
        .featured-store h2 {
            text-align: center;
            font-size: 1.8rem;
        }
    }
    .featured-box {
        margin-bottom: 1.8rem;
    }
    .featured-item img {
        border: 1px solid #dedbdb;
        max-width: 100%;
        object-fit: contain;
        display: block;
        margin: auto;
    }
    .featured-item .store-name {
        display: block;
        margin: auto;
        text-align: center;
        margin-top: 0.8rem;
        color: #3c3c3d;
        font-weight: 500;
    }
    /* ************************Top Online Store********************************** */
    .online-store {
        padding-top: 1.4rem;
        padding-bottom: 2rem;
    }
    .online-store h2 {
        color: #000;
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1.6rem;
    }
    @media (max-width: 768px) {
        .online-store h2 {
            text-align: center;
            font-size: 1.8rem;
        }
    }
    .online-box {
        margin-bottom: 2.4rem;
    }
    .online-item img {
        max-width: 90%;
        max-height: 3.5rem;
        display: block;
        margin: auto;
        border-radius: 4px;
        object-fit: contain;
        box-shadow: 5px 5px 10px #bdbbbb;
    }
    /* ******************************Hot Deal for the day***************************** */
    .hot-deal {
        background-color: #f5f5f5;
        padding: 2rem;
    }
    .hot-deal h2 {
        color: #000;
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1.6rem;
    }
    @media (max-width: 768px) {
        .hot-deal h2 {
            text-align: center;
            font-size: 1.8rem;
        }
    }
    .deal-box {
        margin-bottom: 1.4rem;
    }
    .deal-item {
        background-color: #fff;
        padding: 1rem 0.5rem 0.5rem 0.5rem;
        border-radius: 4px;
    }
    .deal-item img {
        border: 1px solid #e8e4e4;
        width: 65%;
        display: block;
        margin: auto;
        object-fit: contain;
    }
    .deal-item .desc {
        font-weight: 500;
        font-size: 0.95rem;
        line-height: 1.4;
        margin-top: 1.2rem;
        margin-bottom: 2rem;
    }
    .deal-item button {
        border: none;
        outline: none;
        text-align: center;
        display: block;
        margin: auto;
        margin-top: 1rem;
        background-color: #8043dc;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0.7rem 1.6rem;
        border-radius: 3px;
        cursor: pointer;
        border: 1px solid #8043dc;
        transition: 0.2s ease-in-out;
        margin-bottom: 1rem;
    }
    .deal-item button:hover {
        background-color: transparent;
        color: #8043dc;
        box-shadow: none;
    }
    .deal-item .deal {
        background-color: #0d65a0;
        border: 1px solid #0d65a0;
    }
    .deal-item .deal:hover {
        background-color: transparent;
        color: #0d65a0;
    }
    /* ************************Top Category*************************************** */
    .top-category {
        padding-top: 3rem;
        padding-bottom: 2rem;
        background-color: #ecf4fb;
    }
    .top-category h2 {
        color: #000;
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1.8rem;
    }
    @media (max-width: 768px) {
        .top-category h2 {
            text-align: center;
            font-size: 1.8rem;
        }
    }
    .category-box {
        margin-bottom: 2rem;
    }
    .category-item {
        border: 1px solid #e0dddd;
        padding: 0.5rem 2rem 0.3rem 2rem;
        border-radius: 5px;
        background-color: #fff;
    }
    .category-item:hover {
        box-shadow: -5px 5px 10px #adacac;
    }
    .category-item img {
        max-width: 50%;
        display: block;
        margin: auto;
        object-fit: contain;
    }
    .category-item .category-title {
        display: block;
        text-align: center;
        margin-top: 0.8rem;
        color: #323232;
        font-weight: 500;
        padding-bottom: 0.4rem;
        font-size: 0.9rem;
    }
    /* ********************************Get Discount from your fav stores************************** */
    .fav-store {
        padding-top: 3rem;
        padding-bottom: 2rem;
        background-color: #fff;
    }
    .fav-store h2 {
        color: #000;
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 1.8rem;
    }
    @media (max-width: 768px) {
        .fav-store h2 {
            text-align: center;
            font-size: 1.8rem;
        }
    }
    .store-box {
        margin-bottom: 3.5rem;
        border-radius: 50%;
    }
    .store-item {
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        margin: auto;
    }
    .store-item img {
        border-radius: 50%;
        display: block;
        margin: auto;
        height: 100%;
        width: 100%;
        object-fit: contain;
        border: 1px solid #a5a4a4;
        padding: 0.2rem;
    }
    .store-item a {
        display: block;
        height: 100%;
        width: 100%;
        text-align: center;
        margin-top: 1rem;
        font-weight: 600;
        color: #323232;
        font-size: 0.85rem;
    }
    .store-item a:hover {
        text-decoration: underline;
    }
     /* ======================================Modals=========================================== */
     .modal-header .modal-title {
        font-weight: 600;
        font-size: 1.2rem;
    }
    .modal-body #showCode {
        border: 2px dashed #0d65a0;
        padding: 0.5rem 4rem;
        background-color: #dceeff;
        font-weight: 500;
    }
    #showCode i {
        margin-left: 0.5rem;
        color: #0b8c4c;
        font-size: 1.1rem;
    }
    .modal-info {
        text-align: center;
        font-weight: 500;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .modal-footer .visit-store {
        background-color: #8043dc;
        color: #fff;
        border-radius: 4px;
        text-transform: uppercase;
    }
    .show {
        display: block;
    }
</style>

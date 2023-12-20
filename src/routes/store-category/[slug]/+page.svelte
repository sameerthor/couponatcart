<script>
        import { clickOutside } from "./clickOutside.js";

    // @ts-nocheck

    /** @type {import('./$types').PageServerData} */
    export let data;
    var coupon_count = 0;
    var deal_count = 0;

    data.category[0].coupons.forEach((item) => {
        if (item.is_deal == "1") {
            deal_count++;
        } else {
            coupon_count++;
        }
    });
    let showCouponModal = false;
    let showDealModal = false;
    let modalData = null;

    const showModal = (a, b) => {
        let c = document.createElement("a");
        c.target = "_blank";
        c.href = b.store.aff_url;
        c.click();
        modalData = b;
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

<!-- *********************Page Navigation*********************** -->
<section>
    <div class="container mt-4">
        <div class="row navigation">
            <div class="col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div class="navigation-box">
                    <p>
                        <a href="./index.html">Home</a><span>/</span><a
                            href="./category.html">Category</a
                        ><span>/</span><span>Fashion</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- **********************************Sub Category************************** -->
<section class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div class="row category-header">
                    <div class="col-lg-4 col-md-4 col-sm-12 header-img">
                        <img
                            src="https://couponatcart.com/images/{data
                                .category[0].thumb}"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-8 col-md-8 col-sm-12 coupon-deal">
                        <h2 class="d-block">{data.category[0].name}</h2>
                        <br />
                        <div class="header-info">
                            <span>Coupons({coupon_count})</span>
                            <span>Deals({deal_count})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ********************************************Sub-Items ******************************-->
<section class="mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div class="row">
                    {#each data.category[0].coupons as item}                     
                    <div class="col-lg-5 col-md-5 col-xs-10 mx-auto">
                        <div class="row row-cols-2 deal-box">
                            <div class="col-lg-7 col-md-6 col-sm-6 deal-item">
                                <a href="/{item.store.slug}"
                                    ><img
                                        src="https://couponatcart.com/images/{item.store.store_logo}"
                                        alt=""
                                    /></a
                                >
                                <h3>{item.title}</h3>
                            </div>
                            <div class="col-lg-5 col-md-6 col-sm-6 deal-desc">
                                <span class="tag">{item.is_deal=='1'?'Deal':'Coupon'}</span>
                                <span>{item.type_text}%</span>
                                <span>OFF</span>
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
                    </div>
                    {/each}

                </div>
            </div>
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
    .category-header {
        border: 2px solid #2c2f6f;
        border-radius: 5px;
        border-radius: 12px;
        padding: 0.5rem;
    }
    .header-img {
        border: 1px solid #8043dc;
        display: flex;
        padding: 0.5rem;
        border-radius: 12px 0px 0px 12px;
    }
    .header-img img {
        max-width: 45%;
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;
        object-fit: contain;
        aspect-ratio: 3/3;
    }
    .coupon-deal {
        border-radius: 0px 12px 12px 0px;
        background-color: #8043dc;
        padding: 0.5rem;
        color: #fff;
    }
    .coupon-deal h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #fff;
    }
    .header-info {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .header-info span {
        font-weight: 500;
        border: 1px solid #fff;
        padding: 0.4rem 1rem;
        border-radius: 10px;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        .header-img {
            border-radius: 12px 12px 0px 0px;
        }
        .coupon-deal {
            border-radius: 0px 0px 12px 12px;
            background-color: #8043dc;
            padding: 1rem 0.5rem 1rem 0.5rem;
            color: #fff;
        }
    }
    /* ****************Deal boxes*************** */
    .deal-box {
        border: 2px solid #8043dc;
        border-radius: 12px;
        margin-bottom: 1.8rem;
    }
    .deal-item {
        border-radius: 12px 0px 0px 12px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
    .deal-item img {
        max-width: 70%;
        display: block;
        object-fit: contain;
        aspect-ratio: 3/1;
    }
    .deal-item h3 {
        font-weight: 600;
        color: #8043dc;
        font-size: 1rem;
        margin-top: 0.8rem;
    }
    .deal-desc {
        background-color: #8043dc;
        color: #fff;
        border-radius: 0px 12px 12px 0px;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        text-align: center;
    }
    .deal-desc button {
        margin-top: 0.5rem;
        margin-bottom: 1rem;
    }
    .deal-desc span {
        display: block;
        text-transform: uppercase;
    }
    .deal-desc .tag {
        color: #aeacef;
        font-weight: 600;
        margin-bottom: 0.5rem;
        font-size: 0.85rem;
    }
    .deal-desc span:nth-of-type(2),
    .deal-desc span:nth-of-type(3) {
        color: #fff;
        font-weight: 800;
        font-size: 1.8rem;
    }
    .deal-desc button {
        display: block;
        outline: none;
        border: none;
        background-color: #768be6;
        color: #fff;
        padding: 0.5rem;
        text-transform: uppercase;
        font-weight: 500;
        border-radius: 4px;
        margin-top: 1rem;
        margin: 0.5rem auto;
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

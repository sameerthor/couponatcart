<script>
    import { clickOutside } from "./clickOutside.js";

    /** @type {import('./$types').PageServerData} */
    export let data;
    console.log(data);
    let showCouponModal = false;
    let showDealModal = false;
    let modalData = null;

    const showModal = (a, b) => {
        let c = document.createElement("a");
        c.target = "_blank";
        c.href = data.store.store.aff_url;
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

<!-- **********************************coupon Header************************** -->
<section class="coupon-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-10 col-sm-12 mx-auto coupon-box">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 img-block">
                        <div class="coupon-img">
                            <img
                                src="https://couponatcart.com/images/{data.store
                                    .store.store_logo}"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12">
                        <h2 class="coupon-title">
                            {data.store.store.name} Coupons, Discount & Promo Codes
                        </h2>
                        <p class="coupon-desc">{data.store.store.desc}</p>
                        <div class="social">
                            <button
                                ><i
                                    class="fa fa-facebook-square"
                                    aria-hidden="true"
                                ></i>Facebook</button
                            >
                            <button
                                ><i class="fa fa-twitter" aria-hidden="true"
                                ></i>Twitter</button
                            >
                            <button
                                ><i class="fa fa-pinterest-p" aria-hidden="true"
                                ></i>Pintrest</button
                            >
                            <button
                                ><i class="fa fa-whatsapp" aria-hidden="true"
                                ></i>WhatsApp</button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- ****************************Listing-Coupons******************************** -->
<section class="coupon-header">
    <div class="container">
        <div class="row">
            {#each data.store.coupons as item}
                <div class="col-lg-8 col-md-12 col-sm-12 mx-auto list-coupon">
                    <div class="row">
                        <div
                            class="col-lg-4 col-md-12 col-sm-12 coupon-discount"
                        >
                            <div class="discount-tag">
                                <strong>{item.type_text}%</strong>
                                <span>Off</span>
                                <div class="tags">
                                    <i
                                        class="fa fa-check-circle"
                                        aria-hidden="true"
                                    ></i>Verified
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 col-sm-12 coupon-info">
                            <div class="d-md-flex">
                                <div class="tags me-md-auto">
                                    <span
                                        ><i
                                            class="fa fa-wifi"
                                            aria-hidden="true"
                                        ></i>Today Used - 101
                                    </span>
                                </div>
                                <div class="rating ms-md-auto">
                                    <span>
                                        <i class="fa fa-star" aria-hidden="true"
                                        ></i></span
                                    >
                                    <span>
                                        <i class="fa fa-star" aria-hidden="true"
                                        ></i></span
                                    >
                                    <span>
                                        <i class="fa fa-star" aria-hidden="true"
                                        ></i></span
                                    >
                                    <span>
                                        <i class="fa fa-star" aria-hidden="true"
                                        ></i></span
                                    >
                                    <span>
                                        <i
                                            class="fa fa-star-o"
                                            aria-hidden="true"
                                        ></i></span
                                    >
                                    <span class="total">(110 Rates)</span>
                                </div>
                            </div>
                            <p class="desc">
                                {item.title}
                            </p>
                            <p>{item.descp}</p>
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
                        <div></div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
<!-- *******************See Also**************** -->
<section>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 mx-auto my-3 more-store">
                <span class="fw-bold">You may also like: </span>
                <button class="btn btn-warning">
                    ESTÉE LAUDER Coupons & Discount Code</button
                >
            </div>
        </div>
    </div>
</section>

<!-- *************************FAQ********************************** -->
{#if data.store.faqs.length > 0}
    <section>
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-8 col-md-12 col-sm-12 mx-auto fAq my-3 shadow-sm"
                >
                    <h2>{data.store.store.name} Coupon Code FAQs</h2>
                    {#each data.store.faqs as item}
                        <h3>{item.faq_question}</h3>
                        <p>{item.faq_answer}</p>
                    {/each}
                </div>
            </div>
        </div>
    </section>
{/if}
<!-- *************************Related Store********************************** -->
{#if data.store.rstores.length > 0}
    <section>
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-8 col-md-12 col-sm-12 mx-auto store-box my-3"
                >
                    <div class="d-flex my-4">
                        <h2 class="me-auto">Releted Stores</h2>
                        <button class="ms-auto"> See All</button>
                    </div>
                    <div class="row row-cols-2">
                        {#each data.store.rstores as item}
                            <div
                                class="col-lg-2 col-md-4 col-sm-6 related-store"
                            >
                                <div class="related-item shadow">
                                    <a href="/{item.slug}"
                                        ><img
                                            src="https://couponatcart.com/images/{item.store_logo}"
                                            alt=""
                                        /></a
                                    >
                                    <a href="/{item.slug}">{item.name}</a>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </section>
{/if}
<!-- ===================================================Models=================================================== -->
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
                    <button type="button" on:click={()=>window.location.href=data.store.store.aff_url} class="btn visit-store"
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
                    <button type="button" class="btn visit-store" on:click={()=>window.location.href=data.store.store.aff_url}
                        >Visit Store</button
                    >
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    /* ***********************Coupon Header******************* */
    .coupon-header {
        margin-top: 4rem;
    }
    .coupon-img {
        display: flex;
    }
    .img-block {
        border: 1px solid #eae4e4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .img-block:hover {
        border: 1px solid #8043dc;
    }
    .coupon-img img {
        display: flex;
        margin: auto;
        max-width: 100%;
        align-items: center;
        justify-content: center;
    }
    .coupon-box {
        border-bottom: 1px solid #eae4e4;
        padding-bottom: 4rem;
    }
    .coupon-box .coupon-title {
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        color: #000;
    }
    .coupon-box .coupon-desc {
        line-height: 1.4;
        font-weight: 500;
        color: #232323;
        font-size: 1rem;
    }
    .social {
        margin-top: 1rem;
    }
    .social button {
        outline: none;
        margin: 0.4rem;
        padding: 0.3rem 0.8rem;
        font-weight: 500;
        color: #fff;
        border: none;
        border-radius: 4px;
        transition: 0.2s ease;
        font-size: 0.9rem;
    }
    .social button:nth-of-type(1) {
        background-color: #3a579a;
    }
    .social button:nth-of-type(2) {
        background-color: #00abf0;
    }
    .social button:nth-of-type(3) {
        background-color: #cd1c1f;
    }
    .social button:nth-of-type(4) {
        background-color: #25d366;
    }
    .social button:nth-of-type(5) {
        background-color: #333333;
    }
    .social button:hover {
        background-color: #333;
    }
    @media (max-width: 768px) {
        .social button:nth-of-type(3),
        .social button:nth-of-type(5) {
            display: none;
        }
        .social button {
            font-size: 0.74rem;
            margin: 0.2rem;
        }
    }
    .social button i {
        margin-right: 0.5rem;
    }
    @media (max-width: 992px) {
        .img-block {
            border: none;
        }
        .coupon-img {
            border: 1px solid #eae4e4;
            display: block;
            width: 100%;
            margin-bottom: 1.2rem;
            padding: 1rem;
        }
    }
    /* *******************************List Coupons************************ */
    .list-coupon {
        border: 1px solid #eae4e4;
        margin-bottom: 1.6rem;
    }
    .list-coupon .row {
        border-bottom: 1rem;
    }
    .coupon-discount {
        display: flex;
        border-right: 1px solid #eae4e4;
        justify-content: center;
    }
    .coupon-discount .discount-tag {
        display: block;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .discount-tag span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.2rem;
        color: #999999;
    }
    .discount-tag strong {
        font-weight: 800;
        font-size: 3rem;
        color: #8043dc;
    }
    .coupon-discount,
    .coupon-info {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    .tags span,
    .rating .total {
        margin-right: 0.6rem;
        font-weight: 500;
        font-size: 0.85rem;
        color: #999999;
    }
    .tags {
        margin-top: 0.6rem;
        color: #067d32;
        font-size: 0.85rem;
        display: block;
        text-align: center;
        font-weight: 500;
    }
    .tags i {
        margin-right: 0.4rem;
    }

    .rating i {
        color: #ff8b02;
        cursor: pointer;
    }
    .coupon-info .desc {
        font-weight: 500;
        font-size: 0.96rem;
        margin-bottom: 0;
        color: #000;
        margin-top: 0.5rem;
    }
    .coupon-info button {
        border: none;
        outline: none;
        background-color: #8043dc;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        padding: 0.5rem 2.5rem;
        border-radius: 3px;
        cursor: pointer;
        display: block;
        margin: 0.5rem auto 0rem auto;
        transition: 0.2s ease-in;
    }
    .coupon-info button:hover {
        background-color: #8983d5;
    }
    @media (max-width: 992px) {
        .coupon-discount {
            border-right: none;
            border-bottom: 1px solid #eae4e4;
        }
        .coupon-info {
            text-align: center;
        }
        .coupon-info button {
            display: block;
            margin: auto;
            width: 60%;
        }
    }
    @media (max-width: 768px) {
        .rating {
            display: block;
            margin: 0.5rem auto;
        }
    }
    /* ***********************MORE STORE************* */
    .more-store {
        border: 1px solid #d2d0d0;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
    @media (max-width: 768px) {
        .more-store {
            text-align: center;
        }
    }
    /* ************************FAQ********************* */
    .fAq {
        padding: 0.5rem;
    }
    .fAq h2 {
        color: #000;
        font-weight: 600;
        margin: 1rem 0rem;
        font-size: 1.85rem;
    }
    .fAq h3 {
        color: #000;
        font-weight: 600;
        margin: 1rem 0rem;
        font-size: 1.5rem;
    }
    .fAq p {
        color: #3f372f;
        font-size: 0.95rem;
        line-height: 1.8;
    }
    /* ****************************Releted Store************************* */
    .store-box button {
        border: none;
        outline: none;
        color: #fff;
        background-color: #1162ff;
        border-radius: 6px;
        padding: 0.2rem 1rem;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
    }
    .store-box button:hover {
        background-color: #d9d4f6;
        color: #062f82;
    }
    .store-box h2 {
        font-weight: 600;
        font-size: 1.6rem;
    }
    .related-store {
        margin-bottom: 1.2rem;
    }
    .related-item {
        padding: 0.5rem;
        background-color: #fff;
        border-radius: 5px;
    }
    .related-item img {
        display: block;
        object-fit: contain;
        max-width: 100%;
        margin: auto;
        min-height: 106px;
    }
    .related-item a {
        display: block;
        width: 100%;
        margin: auto;
        text-align: center;
        text-decoration: none;
        color: #000;
        font-weight: 500;
    }
    .related-item a:nth-of-type(2) {
        border-top: 1px solid #a09f9f;
        padding-top: 0.2rem;
    }
    .icons button {
        border: none;
        outline: none;
        background-color: transparent;
    }
    /* **************************** */
    #unlockDeal {
        background-color: #2158d7;
    }
    #unlockDeal i {
        margin-right: 0.5rem;
    }
    #unlockDeal:hover {
        background-color: #34549f;
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

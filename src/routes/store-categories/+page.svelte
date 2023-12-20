<script>
// @ts-nocheck

    /** @type {import('./$types').PageServerData} */
    export let data;
</script>
<!-- *********************Page Navigation*********************** -->
 <section>
    <div class="container mt-4">
        <div class="row navigation">
            <div class="col-lg-10 col-md-12 col-sm-12 mx-auto">
               <div class="navigation-box">
                   <p><a href="./index.html">Home</a><span>/</span><span>Category</span></p>
               </div>
            </div>
        </div>
    </div>
</section>  
<!-- **********************************List Category************************** -->
<section>
<div class="container mt-4">
    <div class="row">
        <div class="col-lg-10 col-md-12 col-sm-12 mx-auto">
           <div class="row row-cols-3">
            {#each data.res as item}
                <div class="col-lg-2 col-md-3 col-sm-4 category-box">
                    <div class="category-item">
                        <div class="cat-img">
                        <a href="/store-category/{item.slug}"> <img src="https://couponatcart.com/images/{item.thumb}" alt=""></a>
                        </div>
                        <div class="category-title">
                            <a href="/store-category/{item.slug}">{item.name}</a>
                        </div>
                    </div>
                </div>
                {/each}
                <!-- ******************** -->
           </div>
        </div>
    </div>
</div>
</section> 
<style>
    .category-box{
    margin-bottom: 1.2rem;
}
.category-item{
    border: 1px solid #cccccc;
}
.cat-img img{
    max-width:45%;
    display: block;
    margin: auto;
    aspect-ratio: 2/3;
    object-fit: contain;
}
.category-title {
    text-align: center;
    margin-bottom: .6rem;
}
.category-title a{
    color: #222;
    font-weight: 500;
    font-size: .95rem;
}
@media(max-width:500px){
    .category-title a{
        font-size: .8rem;
    }
}
</style>
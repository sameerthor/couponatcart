<script>
    /** @type {import('./$types').PageServerData} */
    export let data;
    const fetchStores=async (e)=>{
      var q=e.target.value;
      const response = await fetch(
            'https://admin.couponatcart.com/scoop/public/api/coupons?q='+q,
            {
                method: 'GET'
            }
        );
        const result = await response.json();
        data.res=result;
    }
</script>
<!-- *************************Navigation Bar*********************** -->
    <section>
        <div class="container mt-4 navigation">
            <div class="row">
                <div class="col-lg-10 col-md-12 col-sm-12 mx-auto">
                   <div class="navigation-box">
                       <p><a href="./index.html">Home</a> <span>/</span> <span>Coupon</span></p>
                   </div>
                </div>
            </div>
        </div>
    </section>    
  
 <!-- **********************************Store Search Bar************************** -->
<section class=" mt-5">
  <div class="container">
      <div class="row">
          <div class="col-lg-8 col-md-10 col-sm-12 mx-auto store-search">
              <form action="">
                  <input type="text" on:keyup={(e)=>fetchStores(e)} placeholder="Search for stores ...">
                  <button><i class="fa fa-search" aria-hidden="true"></i></button>
              </form>
          </div>   
      </div>
  </div>
</section>
<!-- *****************************Store Body******************** -->
<section class=" mt-5">
  <div class="container">
      <div class="row">
          <div class="col-lg-10 col-md-12 col-sm-12 mx-auto store shadow-sm">
             <div class="row row-cols-2">
             
               {#each data.res as item}
                
               <div class="col-lg-3 col-md-4 col-sm-6 store-box">
                   <div class="store-item shadow-sm">
                       <div class="store-image">
                            <a href="/{item.slug}"><img src="https://couponatcart.com/images/{item.store_logo}" alt=""></a>
                       </div>
                       <div class="store-coupon">
                            <a href="/{item.slug}">{item.name}</a>
                            <span>{item.coupons_count} Coupons Available</span>
                       </div>
                   </div>
                </div>
                {/each}

             </div>
          </div>   
      </div>
  </div>
</section>  
<style>
 body{
    background-color: #f8f8f8;
}
/* ****************Store Search Bar******************** */
.store-search form{
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 1.76rem;
    background-color: #8043dc;
    padding: .2rem .8rem;
}    
.store-search form input{
    width: 77%;
    border-radius: 1.76rem;
    outline: none;
    border: none;
    background-color: transparent;
    color: #FFF;
    padding: .7rem 1rem;
}
::placeholder{
    color: #FFF;
}

.store-search form button{
    width: 22%;
    border-radius: 1.76rem;
    outline: none;
    border: none;
    padding: .7rem 0rem;
    box-shadow: 2px 2px 10px #fff;
    font-weight: 500;
    color: #222;
    text-transform: uppercase;
    border: 1px solid #fff;
    transition: .2s ease;
}
.store-search form button:hover{
    background-color: transparent;
    color: #fff;
    box-shadow: none;
}
@media(max-width:770px){
    .store-search form input{
        padding: .5rem 1rem;
        width: 72%;
    }
    .store-search form button{
        padding: .5rem 1rem;
        width: 25%;
    }
}
/* *************************ALL STORES************************** */
.store{
    background-color: #fff;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.store-box{
    margin-bottom: 2.2rem;
}
.store-item{
    border: 1px solid #dbd9d9;
    /* box-shadow: 2px 2px 10px #949393; */
    border-radius: 4px;
    background-color: #FFF;
}
.store-image img{
    display: block;
    margin: auto;
    max-width: 75%;
    padding: .6rem 0rem;
    object-fit: contain;
    aspect-ratio: 3/2;
}
.store-coupon{
    text-align: center;
    border-top: 1px solid #e1e1e4;
    margin-top: 1rem;
}
.store-coupon a{
    display: block;
    color: #333a3f;
    font-weight: 500;
    padding-top: .8rem;
    /* padding-bottom: .8rem; */
    font-size: 1rem;
}
@media(max-width:600px){
    .store-coupon a{
        font-size: .8rem;
    }
}
/* ********************Navigation*********************** */
.navigation .navigation-box{
    background-color: #f5f1f1;
    
}

.navigation .navigation-box {
    background-color: #f9f7f7;
    padding: 0.6rem 0.8rem;
    box-sizing: border-box;
    border-radius: 4px;
}

.navigation .navigation-box a {
    font-weight: 500;
    color: #000;
    font-size: .95rem;
    text-decoration: none;
}
.navigation .navigation-box p span {
    margin: 0.4rem;
    font-size: .86rem;
    color: #938682;
    font-weight: 500;
}
</style>
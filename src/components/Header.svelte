<nav class="nav-box container-fluid navbar navbar-expand-lg bg-light" id="top">
    <div class="container-fluid col sm-8">
      
      <button class="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbarbrand mx-auto" href="/">Coupon<span>AtCart</span></a>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/store-categories">Category</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/stores">Coupon</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog">Blog</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control headerInput" type="search" placeholder="Search" aria-label="Search">
          <button class="btn headerBtn" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg></button>
        </form>
      </div>
    </div>
  </nav>
  <style>
    
    .nav-box{
              padding: .2rem 6rem;
              box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);

            }
            .navbarbrand{
                text-decoration: none;
                font-weight: 600;
                font-size: 2.2rem;
                color: #000;
                letter-spacing: 1px;
                outline: none;
            }
          @media(max-width:768px){
              .nav-box{
              padding: .1rem 1rem;
            }
          }
          
            .navbarbrand span{
                color: #368c86;
            }
            @media(max-width:500px){
                .navbarbrand{
                    margin: auto;
                    text-align: center;
                    align-items: center;
                    font-size: 2.3rem;
                }
            }
            @media(max-width:410px){
                .navbarbrand{
                    font-size: 1.8rem;
                }
            }
            @media(max-width:340px){
                .navbarbrand{
                    font-size: 1.2rem;
                }
            }
          
           .nav-box .nav-item .nav-link{
                color: #000;
                font-weight: 600;
                margin: 0 .3rem;
                font-size: .95rem;
                letter-spacing: .5px;
            }
            .nav-box .nav-item .nav-link:hover{
               color: #368c86;
               text-decoration: none;
            }
            .headerInput{
              border: 1px solid #2323231c !important;
              border-radius: 0px !important;
              border-right: none !important;
              margin-right: 0px;
            }
            .headerInput:focus{
             border: 1px solid #368c86;
            }
            .headerInput::placeholder{
             font-size: .9rem;
            }
            .headerBtn{
              border: 1px solid #2323231c;
              border-radius: 0px;
              border-left: none;
              background-color: #368c86;
              color: #fff;
              font-weight: 500;
            }
            .nav-item .nav-link{
              text-decoration: none;
            }

  </style>

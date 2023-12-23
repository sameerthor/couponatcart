<script>
  import "../app.scss";
  
  import { onMount } from 'svelte'
  onMount(async () => {
    window.bootstrap = await import('bootstrap/dist/js/bootstrap.min.js')

  });
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>
<Header />
<slot />
<Footer />

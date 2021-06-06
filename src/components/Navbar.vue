<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky="true">
    <b-navbar-brand to="/">
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/raspberry-pi-3-569254.png"
        width="30px"
        height="30px"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Keresés</b-nav-item>
        <b-nav-item to="/controller">Lejátszás</b-nav-item>
        <b-nav-item to="/raspi">Pi</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: "Navbar",
  };
</script>

<style></style>

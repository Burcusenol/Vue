<template>
  <div>
    <ul class="nav nav-pills">
      <router-link active-class="active" to="/" exact tag="li">
        <a>Home</a>
      </router-link>
      <router-link active-class="active" to="/user" tag="li">
        <a>User</a>
      </router-link>
            <!-- <router-link active-class="active" to="/user/2" exact tag="li">
        <a>User 2</a>
      </router-link> -->
    </ul>
  </div>
</template>

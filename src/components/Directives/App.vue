<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay.flash="{mainColor:'green',secondColor:'blue',delay:500}">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
        <hr />
        <p v-color.delay="'green'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    color: {
      bind(el, binding) {
        let delay = 0;
        if (binding.modifiers["delay"]) {
          delay = 2000;
        }

        if (binding.modifiers["flash"]) {
          let firstColor = binding.value.maincolor;
          let secondColor = binding.value.secondColor;
          let currentColor = firstColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = firstColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = binding.value;
              } else {
                el.style.color = binding.value;
              }
            }, 1000);
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
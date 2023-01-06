<template>


    <div class=" avatar-group ">
      <div class="avatar" v-for="item in list.slice(0,2)">
        <avatar  :name="item.name"></avatar>
      </div>
 </div>
</template>
<script>
import Avatar from "./AvatarComponent.vue";
export default {
props:['list'],
components:{Avatar},

}
</script>



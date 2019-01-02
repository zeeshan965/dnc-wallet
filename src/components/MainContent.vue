<template>
    <div class="content-page">
        <!-- Start content -->
        <transition name="slidefadesmall" mode="out-in" appear>
            <router-view></router-view>
        </transition>
        <!-- end content -->
        <project-footer></project-footer>
    </div>
</template>


<script>

</script>
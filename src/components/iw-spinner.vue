<template lang="pug">
    .iw-comp.spinner
        .iw-spinner.d-flex.justify-content-center.align-items-center
            vue-simple-spinner
</template>

<script>
    import Spinner from 'vue-simple-spinner'
    export default {
        props: {},
        components: {
            Spinner,
        },
        mixins: [],
        data: function () {
            return {};
        },
        watch: {},
        computed: {},
        methods: {},
        mounted: function () {},
    }
</script>

<style>
.iw-comp.spinner {
    position: absolute;
    background: white;
    opacity: 0.7;
    width: 90vw;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
}

.iw-comp.spinner .iw-spinner {
    height: 100%;
    width: 100%;
}
</style>

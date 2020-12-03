<template>
    <div>
        <FloorFirst></FloorFirst>
        <FloorSecond></FloorSecond>
        <FloorThird></FloorThird>
        <!-- <FloorForth></FloorForth> -->
    </div>
</template>

<script>
    import FloorFirst from "./floorFirst";
    import FloorSecond from "./floorSecond";
    import FloorThird from "./floorThird";
    // import FloorForth from "./floorForth";
    export default {
        components: {
            FloorFirst,
            FloorSecond,
            FloorThird,
            // FloorForth
        }
    }
</script>

<style scoped>

</style>

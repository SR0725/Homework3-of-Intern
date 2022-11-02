<template>
    <v-card outlined elevation="2" class="course">
        <span class="container">
            <font-awesome-icon icon="fa-solid fa-bars" class="bar" />
            <h3 class="index">{{ index + 1 }}</h3>
            <h3 class="title">{{ title }}</h3>
        </span>
        <span class="trash" @click="deleteSelectTheCourse">
            <font-awesome-icon icon="fa-solid fa-trash" />
        </span>
    </v-card>
</template>

<script>
export default {
    props: ['title', 'curriculumNumber', 'index'],
    methods: {
        deleteSelectTheCourse() {
            this.$emit('deleteSelectTheCourse', this.curriculumNumber)
        }
    },
}

</script>

<style lang="scss" scoped>
.course {
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    margin-bottom: 8px;
    cursor: pointer;

    .container {
        display: flex;
        align-items: center;

        .bar {
            font-size: 20px;
        }

        .index {
            font-size: 20px;
            background: rgba(0, 0, 0, 0.1);
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 8px;
            margin-right: 8px;
        }
    }

    .trash {
        position: absolute;
        right: 16px;
        font-size: 20px;
    }
}
</style>


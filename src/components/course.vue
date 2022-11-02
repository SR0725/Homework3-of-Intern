<template>
    <v-card 
        outlined elevation="2" class="course" 
        :class="{ 
            'available': !selected,
            'unavailable': selected 
        }"
        @click="selectTheCourse"
        >
        <div class="title_credits">
            <h3 class="title">{{ title }}</h3>
            <p class="credits">{{ credits }} Credits</p>
        </div>
        <div class="instructor">
            {{ instructor }}
        </div>
        <h4 class="curriculum">
            {{ curriculumNumber }}
        </h4>
    </v-card>
</template>

<script>
export default {
    props: ['title', 'credits', 'instructor', 'curriculumNumber', 'selected'],
    methods: {
        selectTheCourse() {
            this.$emit('selectTheCourse', this.curriculumNumber);
        }
    }
}
</script>

<style lang="scss" scoped>
.course {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    margin-bottom: 8px;

    &.available {
        cursor: pointer;
    }

    &.unavailable {
        background: #ccc;
        opacity: 0.8;
    }
}

.title_credits {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
}

.instructor {
    color: #666;
}

.curriculum {
    color: #444;
}
</style>


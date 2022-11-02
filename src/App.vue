<template>
    <v-app style="background: #edf0f2;">
        <v-main>
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="12" md="6">
                        <h1>Course Information</h1>
                            <courseVue 
                                v-for="course in courses" 
                                :title="course['Course title']"
                                :credits="course['Credits']" 
                                :instructor="course['Instructor']"
                                :curriculumNumber="course['Curriculum Number']" 
                                :selected="course['selected']"
                                @selectTheCourse="selectTheCourse" 
                            />
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="done">
                            <h1>Course I plan to Take</h1>
                            <v-btn variant="outlined" @click="showResult">
                                Done
                            </v-btn>
                        </div>
                        <draggable v-model="selectCourses" group="selectCourses" 
                            @start="drag = true"
                            @end="drag = false"
                            item-key="id">
                            <template #item="{ element, index }">
                                <selectCourseVue 
                                    :title="element['Course title']" 
                                    :index="index"
                                    :curriculumNumber="element['Curriculum Number']"
                                    @deleteSelectTheCourse="deleteSelectTheCourse"
                                />
                            </template>
                        </draggable>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <h2>Result: {{ result }}</h2>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios';
import courseVue from './components/course.vue';
import selectCourseVue from './components/selectCourse.vue';
import draggable from 'vuedraggable'

export default {
    name: 'App',
    data: () => ({
        courses: [],
        selectCourses: [],
        result: []
    }),
    methods: {
        getCourse() {
            let vm = this;
            axios({
                method: 'get',
                url: '/course',
                baseURL: location.protocol + '//' +location.hostname
            }).then(function (response) {
                let courses = response.data;
                vm.courses = Object.keys(courses).map(
                    (key) => courses[key]
                );
            });
        },
        selectTheCourse(curriculumNumber) {
            //先確定不再已選擇的課程中
            let alreadySelected = this.selectCourses.some((course) => course['Curriculum Number'] === curriculumNumber)
            if (alreadySelected) {
                return;
            }
            //加入課程
            let course = this.courses.find((course) => course['Curriculum Number'] === curriculumNumber);
            this.selectCourses.push(
                course
            )
            course.selected = true;
        },
        deleteSelectTheCourse(curriculumNumber) {
            //先確定在已選擇的課程中
            let alreadySelected = this.selectCourses.some((course) => course['Curriculum Number'] === curriculumNumber)
            if (!alreadySelected) {
                return;
            }
            //刪除課程
            let course = this.selectCourses.find((course) => course['Curriculum Number'] === curriculumNumber);
            this.selectCourses.splice(this.selectCourses.indexOf(course), 1);
            course.selected = false;
        },
        showResult() {
            let vm = this;
            this.result = [];
            this.selectCourses.forEach((course) => vm.result.push(course['Course title']))
        }
    },
    mounted() {
        this.getCourse();
    },
    components: {
        courseVue,
        selectCourseVue,
        draggable
    }
}
</script>

<style scoped>
.done {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}
</style>